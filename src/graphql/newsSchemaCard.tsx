import { gql } from 'graphql-request';

export const getNewsCard = (start: number, limit: number, slug?: string) => gql`
  query {
    news(
      ${slug ? `filters: { slug: { not: { eq: "${slug}" } } },` : ''}
      pagination: { start: ${start}, limit: ${limit} },
      sort: ["date:desc"]
      ) {
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
              }
            }
          }
        }
      }
    }
  }
`;
