export const getProjects = `query {
    projects {
     data {
      attributes {
       description
        pageText
        add_title
        add_text
        image {
          data {
            attributes{
              url
            }
          }
        }
        social {
          link
          social
        }
        }
      }
    }
   }`