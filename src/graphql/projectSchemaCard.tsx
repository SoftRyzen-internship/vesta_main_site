import { gql } from 'graphql-request';

export const getProjectsCard = (start: number, limit: number) => gql`
query {
  projects(
    pagination: { start: ${start}, limit: ${limit} },
    sort: ["createdAt:asc"]
    ) {
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