import { gql } from 'graphql-request';

export const getOrganization = gql`
  query {
    organization {
      data {
        attributes {
          legal_support
          request_psychologist
          help_psyhologist
          text
          date
        }
      }
    }
  }
`;
