import { gql } from 'graphql-request';

export const getPartners = (start: number = 0, limit?: number) =>  {
  let paginationPart = '';

  if (limit !== undefined) {
      paginationPart =`pagination: { start: ${start}, limit: ${limit} }`;
  }

  return gql`
  query {
    partner{
      data {
        attributes {
          item(${paginationPart}) {
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
`};
