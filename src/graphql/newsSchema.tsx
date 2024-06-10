export const getNews = `query {
    news {
     data {
      attributes {
        date
        title
        text
        videoLink
        descriptionVideo
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
   }`