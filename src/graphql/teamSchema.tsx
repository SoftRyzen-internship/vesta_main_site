import { gql } from 'graphql-request';

export const getTeam = (start: number = 0, limit?: number) => {
  let paginationPart = '';

  if (limit !== undefined) {
      paginationPart =`pagination: { start: ${start}, limit: ${limit} }`;
  }

  return gql`
  query {
    team{
      data {
        attributes {
          itemTeam(${paginationPart})  {  id
            name
            position
            status
            text
            image {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            socialItem {
              link
              social
            }
          }
        }
      }
    }
  }
`};
