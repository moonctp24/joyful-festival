// pages/api/festivals.js
import { BACK_URL } from "@/constants/CONST";
import axios, { AxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    // get 통신 parameter 세팅
    let getParamSetting = "?";
    // eslint-disable-next-line prefer-const
    for (let q of Object.entries(req.query)) {
      getParamSetting += q[0] + "=" + q[1] + "&";
    }
    getParamSetting = getParamSetting.slice(0, -1);
    //`${BASE_URL}${url}${getParamSetting}`
    try {
      const response = await axios.get(
        `${BACK_URL}/festivals${getParamSetting}`,
        // { headers: req.headers },
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "ngrok-skip-browser-warning": "ok",
          },
        },
      );
      res.status(200).json(response.data);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        res
          .status(error.response?.status || 500)
          .json({ message: "Error fetching data" });
      } else {
        res.status(500).json({ message: "Unknown error occurred" });
      }
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
