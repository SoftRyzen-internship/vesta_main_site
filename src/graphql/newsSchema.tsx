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
          descriptionVideo
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
