import { BatchGetItemCommand } from '@aws-sdk/client-dynamodb'
import type { DynamoDBClient, BatchGetItemCommandInput } from '@aws-sdk/client-dynamodb'
import type { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb'

import { DYNAMO_DB_TABLES } from '../constants/dynamoDb'
import { User } from '../domain/user'
import { getDynamoDBClient, geteDynamoDBDocumentClient } from '../libs/dynamoDBClient'
import { UserRepositoryInterface } from './user.repository-interface'

export class UserRepository implements UserRepositoryInterface {
  client: DynamoDBClient
  docClient: DynamoDBDocumentClient
  tableName: string

  constructor() {
    this.client = getDynamoDBClient()
    this.docClient = geteDynamoDBDocumentClient(this.client)
    this.tableName = DYNAMO_DB_TABLES.USERS.TABLE_NAME
  }

  async getById(id: string): Promise<User | null> {
    try {
      const params: BatchGetItemCommandInput = {
        RequestItems: {
          [this.tableName]: {
            Keys: [{ id: { S: id } }],
          },
        },
      }

      const command = new BatchGetItemCommand(params)
      const result = await this.client.send(command)

      if (!result.Responses) {
        return null
      }

      const user = result.Responses[this.tableName][0]

      if (!user) {
        return null
      }

      return {
        id: user.id.S || '',
      }
    } catch (error) {
      console.error('userRepository: getById: ', error)
      throw new Error(error)
    }
  }
}
