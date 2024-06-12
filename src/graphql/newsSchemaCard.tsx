import { gql } from 'graphql-request';

export const getNewsCard = gql`
query {
  news {
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
