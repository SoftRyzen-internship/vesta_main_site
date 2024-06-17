import { gql } from 'graphql-request';

export const getTeam = (start: number, limit: number) =>  gql`
  query {
    team {
      data {
        id
        attributes {
          itemTeam (
      pagination: { start: ${start}, limit: ${limit} },
      sort: ["publishedAt:desc"]
      ) {
      meta {
        pagination {
          totals
        }
      }{
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
`;
