import { gql } from 'graphql-request';

export const getTeam = gql`
  query {
    team {
      data {
        attributes {
          itemTeam {
            name
            position
            status
            text
            image {
              data {
                attributes {
                  url
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
