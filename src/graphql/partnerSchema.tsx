import { gql } from 'graphql-request';

export const getPartners = (start: number, limit: number) =>  gql`
  query {
    partner(
      pagination: { start: ${start}, limit: ${limit} }
      ) {
      meta {
        pagination {
          total
        }
      }
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
