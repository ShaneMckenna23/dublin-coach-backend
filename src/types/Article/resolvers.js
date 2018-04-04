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
          "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjkxRkRENEVCRDYwNjMxNURFREI4MENEMDkzMERFRkZBMjFEREE2NkIiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJrZjNVNjlZR01WM3R1QXpRa3czdi1pSGRwbXMifQ.eyJuYmYiOjE1MjI4NDg0NDgsImV4cCI6MTUyNTQ0MDQ0OCwiaXNzIjoiaHR0cHM6Ly9jbG91ZC5zcXVpZGV4LmlvL2lkZW50aXR5LXNlcnZlciIsImF1ZCI6WyJodHRwczovL2Nsb3VkLnNxdWlkZXguaW8vaWRlbnRpdHktc2VydmVyL3Jlc291cmNlcyIsInNxdWlkZXgtYXBpIl0sImNsaWVudF9pZCI6ImR1Ymxpbi1jb2FjaC1zcXVpZGV4OmZyb250ZW5kIiwic2NvcGUiOlsic3F1aWRleC1hcGkiXX0.m8tGZ5huS_Zj2l2Gpsf1ZzGzy_WAjvO0R7wLL9QOW24vY5gnytKyozCbGCHwb7mOzONn6WmGyq9cgNqpSM5FiW8vsGpS7kAdKIBHLPogNTc-Xo_vgBJqL45AZFEoHz4IFI_szcemsvHKpyOOfJTIt7MuA-drQGCDOWnNkzjZcok60XQRd8vpDHrvg9Qrqm_W5LTTNa-OSrjHksURm79t0cfD4v-ViZJWJK-Dl9bHGRE5vxpXAI__TRgO2luWBZiMlvI_-inJUvoa8qHdg713Epi5hjLDQn8zmgCfcInVpkZrFFfupsWed6-uufPWKX0SpUlChzBfrKwTWfctzS4vEQ"
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