// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { baseUrl } from "../../../../helper/constants";

export default function handler(req, res) {
  const { collectionId } = req.query;
  console.log(collectionId);

  axios
    .get(`${baseUrl}/api/v1/collections/${collectionId}`)
    .then((response) => {
      console.log("data from apicall ", collectionId);
      return res.json(response.data);
    })
    .catch((e) => {
      console.log("search api error", e);
      return res.status(500).send(e);
    });
}
