import { gql } from 'graphql-request';

export const getService = gql`
  query {
    service {
      data {
        attributes {
          serviceItem {
            id
            title
            description
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
