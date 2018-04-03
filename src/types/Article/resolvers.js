import models from "../../models";
import axios from "axios";

const resolvers = {
  queries: {
    getArticles
  }
}

async function getArticles(parentValue, { count }) {
  // let a = {
  //   headline: "TEST",
  //   extract: "TEST",
  //   text: "TEST",
  //   link: "TEST",
  //   publishDate: "TEST",
  //   photo: "TEST",
  //   photoDesc: "TEST",
  //   author: "TEST"
  // }
  // let mock = []
  // mock.push(a)
  // mock.push(a)
  // mock.push(a)
  // mock.push(a)
  // mock.push(a)
  // return mock;

  return await axios
    .get("https://cloud.squidex.io/api/content/dublin-coach-cms/article?$top="+count+"&$orderby=data/publishDate/iv desc", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjkxRkRENEVCRDYwNjMxNURFREI4MENEMDkzMERFRkZBMjFEREE2NkIiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJrZjNVNjlZR01WM3R1QXpRa3czdi1pSGRwbXMifQ.eyJuYmYiOjE1MjEwMzc5NjEsImV4cCI6MTUyMzYyOTk2MSwiaXNzIjoiaHR0cHM6Ly9jbG91ZC5zcXVpZGV4LmlvL2lkZW50aXR5LXNlcnZlciIsImF1ZCI6WyJodHRwczovL2Nsb3VkLnNxdWlkZXguaW8vaWRlbnRpdHktc2VydmVyL3Jlc291cmNlcyIsInNxdWlkZXgtYXBpIl0sImNsaWVudF9pZCI6ImR1Ymxpbi1jb2FjaC1jbXM6ZHVibGluLWNvYWNoLWJhY2tlbmQiLCJzY29wZSI6WyJzcXVpZGV4LWFwaSJdfQ.p828oXPyy0a4no8T_InCqSOpq3GeU1i-H9LaipJI6IFTKO7ElMqKlFg0r67rtYRUvV2v3sBi3WvnvICKtpieBg1iPbkBa8IpX5qHji0eclrgFj2LMCK2gYFmNC-8mtWhO_XW1bv5ppOH9SOPCi9bl7O5GjRphYXallPF7Rf4ArpaE9dr0-2h6qEQ31CH4ZMA6tUYeG9_uBTMS7BKSOgdBJSw7N5mN4oe-iqWWF8AYSGJRB0khdgYna-CbzNYa_FZmh4UpE-AIhFfNZ7Res-O9M5sYlp8sYA9fNxYdlhyAxzxVJfusTTZNS4XhSBriJSNI_C8ILLsL5i_iBKE9FK9Yw"
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