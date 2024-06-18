import { gql } from 'graphql-request';

export const getProjects = gql`
  query {
    projects {
      data {
        id
        attributes {
          publishedAt
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
                alternativeText
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
