// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { baseUrl } from "../../../../helper/constants";

export default function handler(req, res) {
  const { id } = req.query;
  console.log(id);
  return axios
    .get(
      `${baseUrl}/api/v1/stories/${id}`
    )
    .then((response) => {
      return res.status(200).send(response.data);
    })
    .catch((e) => {
      console.log("search api error", e);
      return res.status(500).send(e);
    });
}
