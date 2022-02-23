import { APIGatewayProxyHandler } from 'aws-lambda'
import { document } from '../utils/dynamodbClient'

interface IRegisterPatient {
  id: string
  name: string
  birthday: Date
  email: string
  address: string
}
export const handler: APIGatewayProxyHandler = async event => {
  const { id, name, birthday, email, address } = JSON.parse(
    event.body
  ) as IRegisterPatient

  await document
    .put({
      TableName: 'patients',
      Item: {
        id,
        name,
        birthday,
        email,
        address,
        created_at: new Date().getTime(),
      },
    })
    .promise()

  const response = await document
    .query({
      TableName: 'patients',
      KeyConditionExpression: 'id = :id',
      ExpressionAttributeValues: {
        ':id': id,
      },
    })
    .promise()

  return {
    statusCode: 201,
    body: JSON.stringify(response.Items[0]),
  }
}
