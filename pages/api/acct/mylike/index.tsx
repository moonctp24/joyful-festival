import axios, { AxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const adminJwt = req.body.token;

  try {
    const response = await axios.get(
      `http://ec2-3-34-40-99.ap-northeast-2.compute.amazonaws.com/auth/signout`,
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
}
