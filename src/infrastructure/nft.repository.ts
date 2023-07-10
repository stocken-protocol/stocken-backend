import { BatchGetItemCommand } from '@aws-sdk/client-dynamodb'
import type { DynamoDBClient, BatchGetItemCommandInput } from '@aws-sdk/client-dynamodb'
import type { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb'

import { DYNAMO_DB_TABLES } from '../constants/dynamoDb'
import { NftMetadata, Attribute } from '../domain/nft.interface'
import { getDynamoDBClient, geteDynamoDBDocumentClient } from '../libs/dynamoDBClient'

import { NftRepositoryInterface } from './nft.repository-intarface'

export class NftRepository implements NftRepositoryInterface {
  client: DynamoDBClient
  docClient: DynamoDBDocumentClient
  tableName: string

  constructor() {
    this.client = getDynamoDBClient()
    this.docClient = geteDynamoDBDocumentClient(this.client)
    this.tableName = DYNAMO_DB_TABLES.NFTS.TABLE_NAME
  }

  async getById(id: string): Promise<NftMetadata | null> {
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
      const attributes: Attribute[] = []
      if (nft.attributes.L) {
        nft.attributes.L.forEach((attribute: { M }) => {
          attributes.push({
            trait_type: attribute.M.trait_type.S,
            value: attribute.M.value.S,
          })
        })
      }

      return {
        id: nft.id.S || '',
        name: nft.name.S || '',
        description: nft.description.S || '',
        image: nft.image.S || '',
        externalUrl: nft.externalUrl.S || '',
        attributes,
      }
    } catch (error) {
      error('nftRepository: getById: ', error)
      throw new Error(error)
    }
  }
}
