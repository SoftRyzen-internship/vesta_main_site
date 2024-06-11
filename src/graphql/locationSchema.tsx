import { gql } from 'graphql-request';

export const getLocation = gql`
  query {
    location {
      data {
        attributes {
          locationItem {
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
