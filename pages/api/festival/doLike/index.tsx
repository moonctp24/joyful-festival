// pages/api/festivals.js
import { BACK_URL } from "@/constants/CONST";
import axios, { AxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const adminJwt = req.body.token;

  if (req.method === "POST") {
    try {
      const response = await axios.post(
        `${BACK_URL}/festivals/${req.body.id}`,
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            // AccessToken: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZCIsInJvbGVzIjpbIlVTRVIiXSwiaWF0IjoxNzM2OTM0Mjg4LCJleHAiOjE3MzY5Mzc4ODh9.kbCAQCR5aKacZJFQKxj39cAOW8HO3fFqYjecR9FLfeA`,
            AccessToken: adminJwt ? `Bearer ${adminJwt}` : "",
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
