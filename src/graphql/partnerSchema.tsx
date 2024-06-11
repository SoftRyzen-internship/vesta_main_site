import { gql } from 'graphql-request';

export const getPartners = gql`
  query {
    partner {
      data {
        attributes {
          item {
            name
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
