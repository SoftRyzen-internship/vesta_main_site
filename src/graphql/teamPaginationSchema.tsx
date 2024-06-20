import { gql } from 'graphql-request';

export const getTeamPagination = (start: number, limit: number) => gql`
  query {
    team{
      data {
        attributes {
          itemTeam(
            pagination: { start: ${start}, limit: ${limit} }
            ) {
            id
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
