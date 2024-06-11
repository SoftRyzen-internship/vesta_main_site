import { gql } from 'graphql-request';

export const getNews = gql`
  query {
    news {
      data {
        attributes {
          date
          title
          text
          videoLink
          descriptionVideo
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
