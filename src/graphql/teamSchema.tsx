import { gql } from 'graphql-request';

export const getTeam = gql`
  query {
    team{
      data {
        attributes {
          itemTeam { 
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
