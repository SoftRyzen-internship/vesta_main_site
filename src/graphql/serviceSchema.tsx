import { gql } from 'graphql-request';

export const getService = gql`
  query {
    service {
      data {
        id
        attributes {
          serviceItem {
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
