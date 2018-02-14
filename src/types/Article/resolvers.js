import models from "../../models";
import axios from "axios";

const resolvers = {
  queries: {
    getArticles
  }
}

async function getArticles() {
  return await axios
    .get("https://cloud.squidex.io/api/content/dublin-coach/news?$top=10", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjkxRkRENEVCRDYwNjMxNURFREI4MENEMDkzMERFRkZBMjFEREE2NkIiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJrZjNVNjlZR01WM3R1QXpRa3czdi1pSGRwbXMifQ.eyJuYmYiOjE1MTgzNjUyNTEsImV4cCI6MTUyMDk1NzI1MSwiaXNzIjoiaHR0cHM6Ly9jbG91ZC5zcXVpZGV4LmlvL2lkZW50aXR5LXNlcnZlciIsImF1ZCI6WyJodHRwczovL2Nsb3VkLnNxdWlkZXguaW8vaWRlbnRpdHktc2VydmVyL3Jlc291cmNlcyIsInNxdWlkZXgtYXBpIl0sImNsaWVudF9pZCI6ImR1Ymxpbi1jb2FjaDpkdWJsaW4tY29hY2gtYmFja2VuZCIsInNjb3BlIjpbInNxdWlkZXgtYXBpIl19.VgBbq2Z5oRJ0DdmbR2YDvljaBX3kkvoAF1BRDRh8RIIyWN2T4EnWMYewmxiYZfHjCFoOUkpXwJVLC-yKnWsqzaNbk9MLiFEJnOBcdVG-BY-IYfrSaXKyORWXAWQsV3wigA8tgGl9tNxd2Ufjql75sxdDK2vpsP-R5v0gdIuuD8aMXGK1Sxq6eNcF1YIHHw0qqbrhp0JeGaJF8K2GLotC1B-WW9H4wRSLsuVx5tPviTHbhBw8cde2knNd9SiWyOOdHmFP3JY6v9cMub9CcWChBYu3DYrrxKKSBtXc6tYtZE76_4LjF7dStjYAQQeLW21kqLFln-NJM4ACgt4Wfqo-cg"
      }
    })
    .then(function(response) {
      return response.data.items.map(function(el) {
        return {
          headline: el.data.headline.iv,
          extract: el.data.extract.iv,
          text: el.data.text.iv,
          publishDate: el.data.publishDate.iv.slice(0, 10),
          photo: el.data.photo.iv[0],
          photoDesc: el.data.photoDesc.iv,
          author: el.data.author.iv
        };
      });
    });
}

export default resolvers