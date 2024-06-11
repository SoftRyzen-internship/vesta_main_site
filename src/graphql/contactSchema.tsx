import { gql } from 'graphql-request';

export const getContact = gql`
  query {
    contact {
      data {
        attributes {
          legal_support
          psychological_support
          head_organization
          email
        }
      }
    }
  }
`;
