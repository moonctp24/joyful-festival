import { BACK_URL } from "@/constants/CONST";
import axios, { AxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const adminJwt = req.body.token;

  try {
    const response = await axios.delete(`${BACK_URL}/auth/signout`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        AccessToken: adminJwt ? `Bearer ${adminJwt}` : "",
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
