import { gql } from 'graphql-request';

export const getPartnersPagination = (start: number, limit: number) => gql`
  query {
    partner{
      data {
        attributes {
          item(
            pagination: { start: ${start}, limit: ${limit} }
            ) {
            id
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
