import { gql } from 'graphql-request';

export const getLocation = gql`
  query {
    location {
      data {
        attributes {
          locationItem {
            id
            city
            address
            phone
            locationLink
          }
        }
      }
    }
  }
`;
