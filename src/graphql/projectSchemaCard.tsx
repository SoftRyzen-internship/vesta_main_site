import { gql } from 'graphql-request';

export const getProjects = (start: number, limit: number) => gql`
  query {
    projects(
      pagination: { start: ${start}, limit: ${limit} },
      sort: ["createdAt:asc"]
      ) {
      meta {
        pagination {
          total
        }
      }
      data {
        id
        attributes {
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
          createdAt
        }
      }
    }
  }
`;
