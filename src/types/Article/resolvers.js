import models from "../../models";
import axios from "axios";

const resolvers = {
  queries: {
    getArticles
  }
}

async function getArticles(parentValue, { count }) {
  return await axios
    .get("https://cloud.squidex.io/api/content/dublin-coach-squidex/article?$top="+count+"&$orderby=data/publishDate/iv desc", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjkxRkRENEVCRDYwNjMxNURFREI4MENEMDkzMERFRkZBMjFEREE2NkIiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJrZjNVNjlZR01WM3R1QXpRa3czdi1pSGRwbXMifQ.eyJuYmYiOjE1Mjg5MzE1MDksImV4cCI6MTUzMTUyMzUwOSwiaXNzIjoiaHR0cHM6Ly9jbG91ZC5zcXVpZGV4LmlvL2lkZW50aXR5LXNlcnZlciIsImF1ZCI6WyJodHRwczovL2Nsb3VkLnNxdWlkZXguaW8vaWRlbnRpdHktc2VydmVyL3Jlc291cmNlcyIsInNxdWlkZXgtYXBpIl0sImNsaWVudF9pZCI6ImR1Ymxpbi1jb2FjaC1zcXVpZGV4OmZyb250ZW5kIiwic2NvcGUiOlsic3F1aWRleC1hcGkiXX0.MfQN7PqoshVJZhzGJE-f-ltCoRC3FghY4429FWWoBwQEC5Rcrb3UhHJ4yO4WNGb0UYPD4XUjQkI8884w5Wl5AZwCo2CKoaUsWwT-9LVwh4DcQPv8MU235qKTPu-GVScyBCDKNgmWYRUSkMv5mx80yptyjDQU062tBQuFX8T0knVdrHPt_pARa-H9k1Yv2v3BgISY7eIlQHO6JUpc2MgQcxM5tkizbGLUoiQGaAH25fVewz00HE2v4g7IAh0xQsywHm89ujArNu5VrqXcwvYJa_cUirUnoBEnOYnMWEioiHv2L-XRqatb1Nzb_yUzNE3YKiuarkEKfsiSp3NskyD8PA"
      }
    })
    .then(function(response) {
      return response.data.items.map(function(el) {
        return {
          headline: el.data.headline.iv,
          extract: el.data.extract.iv,
          text: el.data.text.iv,
          link: el.data.link.iv,
          publishDate: el.data.publishDate.iv.slice(0, 10),
          photo: el.data.photo.iv[0],
          photoDesc: el.data.photoDesc.iv,
          author: el.data.author.iv
        };
      });
    }).catch(error => {
      console.log(error.response)
  });
}

export default resolvers