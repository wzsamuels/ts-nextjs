/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEmail = /* GraphQL */ `
  query GetEmail($id: ID!) {
    getEmail(id: $id) {
      id
      email
      name
      createdAt
      updatedAt
    }
  }
`;
export const listEmails = /* GraphQL */ `
  query ListEmails(
    $filter: ModelEmailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
