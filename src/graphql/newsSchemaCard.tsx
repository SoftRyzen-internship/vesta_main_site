import { gql } from 'graphql-request';

export const getNewsCard = (start: number, limit: number) => gql`
query {
  news(pagination: { start: ${start}, limit: ${limit} }, sort: ["date:desc"]) {
    data {
      id
      attributes {
        date
        title
        text
        slug
        image {
          data {
            attributes {
              url
                alternativeText
              alternativeText
            }
          }
        }
      }
    }
      meta {
        pagination {
          total
        }
      }
  }
}
`;
