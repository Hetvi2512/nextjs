// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { baseUrl } from "../../../../helper/constants";

export default function handler(req, res) {
  const { sectionId, offset, limit } = req.query;
  console.log(sectionId, offset, limit);
  return axios
    .get(
      `${baseUrl}/api/v1/search/?section-id=${sectionId}&offset=${offset}&limit=${limit}&sort=latest-published`
    )
    .then((response) => {
      return res.status(200).send(response.data);
    })
    .catch((e) => {
      console.log("search api error", e);
      return res.status(500).send(e);
    });
}
