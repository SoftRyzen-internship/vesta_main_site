export const getTeam = `
query {
    team {
     data {
      attributes {
        itemTeam {
          name
          position
          status
          text
          image {
            data {
              attributes {
                url
              }
            }
          }
          socialItem {
            link
            social
          }
        }
      }
    }
   }
}`