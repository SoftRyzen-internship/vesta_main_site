import { gql } from 'graphql-request';

export const getProjects = gql`
  query {
    projects {
      data {
        attributes {
          title
          description
          slug
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
