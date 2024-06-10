export const getOrganization = `
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
}`