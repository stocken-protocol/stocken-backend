import { Nft } from '../domain//nftInterface'
import { NftRepositoryInterface } from './nftRepositoryInterface'
import { BatchGetItemCommand } from '@aws-sdk/client-dynamodb'
import type { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb'
import type { DynamoDBClient, BatchGetItemCommandInput } from '@aws-sdk/client-dynamodb'
import { getDynamoDBClient, geteDynamoDBDocumentClient } from '../libs/dynamoDBClient'
import { DYNAMO_DB_TABLES } from '../constants/dynamoDb'

export class NftRepository implements NftRepositoryInterface {
  client: DynamoDBClient
  docClient: DynamoDBDocumentClient
  tableName: string

  constructor() {
    this.client = getDynamoDBClient()
    this.docClient = geteDynamoDBDocumentClient(this.client)
    this.tableName = DYNAMO_DB_TABLES.NFTS.TABLE_NAME
  }

  async getById(id: string): Promise<Nft | null> {
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

      const nft = result.Responses[this.tableName][0]

      return {
        id: nft.id.S || '',
        name: nft.name.S || '',
        description: nft.description.S || '',
        image: nft.image.S || '',
        externalUrl: nft.externalUrl.S || '',
        attributes: nft.attributes.L || [],
      }
    } catch (error) {
      error('nftRepository: getById: ', error)
      throw new Error(error)
    }
  }
}
