import { gql } from 'graphql-request';

export const getPartners = gql`
  query {
    partner {
      data {
        id
        attributes {
          item {
            name
            image {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
        }
      }
    }
  }
`;
