import { gql } from 'graphql-request';

export const getProjects = (start: number, limit: number) => gql`
  query {
    projects(
      pagination: { start: ${start}, limit: ${limit} },
      sort: ["publishedAt:desc"]
      ) {
      meta {
        pagination {
          total
        }
      }
      data {
        id
        attributes {
          publishedAt
          title
          description
          slug
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
`;
