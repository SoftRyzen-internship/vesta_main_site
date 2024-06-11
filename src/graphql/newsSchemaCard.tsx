import { gql } from 'graphql-request';

export const getNewsCard = gql`
  query {
    news {
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
              }
            }
          }
        }
      }
    }
  }
`;
