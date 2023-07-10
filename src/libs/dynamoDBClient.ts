import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb'

import { AWS_REGION } from '../constants/aws'
import { DYNAMO_DB_ENDPOINT } from '../constants/dynamoDb'

export const getDynamoDBClient = (): DynamoDBClient => {
  const config = {
    region: AWS_REGION,
    ...(process.env.STAGE !== 'production' ? { endpoint: DYNAMO_DB_ENDPOINT } : {}),
  }

  return new DynamoDBClient(config)
}

export const geteDynamoDBDocumentClient = (client: DynamoDBClient): DynamoDBDocumentClient => {
  return DynamoDBDocumentClient.from(client)
}
