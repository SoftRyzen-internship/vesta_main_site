import { gql } from 'graphql-request';

export const getNewsCard = (start: number, limit: number) => gql`
  query {
    news(pagination: { start: ${start}, limit: ${limit} }, sort: ["date:desc"]) {
      data {
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
