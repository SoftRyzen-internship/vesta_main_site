import { gql } from 'graphql-request';

export const getNews = gql`
  query {
    news {
      data {
        id
        attributes {
          date
          title
          text
          videoLink
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
