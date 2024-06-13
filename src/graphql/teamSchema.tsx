import { gql } from 'graphql-request';

export const getTeam = gql`
  query {
    team {
      data {
        id
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
