import { gql } from 'graphql-request';

export const getPartner = gql`
  query {
    partner{
      data {
        attributes {
          item {
            id
            names
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
