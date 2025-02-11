import { BACK_URL } from "@/constants/CONST";
import axios, { AxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const adminJwt = req.body.token;

  try {
    const response = await axios.get(`${BACK_URL}/mypage/like/festivals`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: adminJwt ? `Bearer ${adminJwt}` : "",
        "ngrok-skip-browser-warning": "ok",
      },
    });
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
}
