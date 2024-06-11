import { gql } from 'graphql-request';

export const getProjects = gql`
  query {
    projects {
      data {
        attributes {
          title
          description
          pageText
          add_title
          add_text
          slug
          image {
            data {
              attributes {
                url
              }
            }
          }
          social {
            link
            social
          }
        }
      }
    }
  }
`;
