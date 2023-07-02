import { NextApiRequest, NextApiResponse } from "next";
// import { setCookie } from '../../utils/cookies'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  //   setCookie(res, 'Next.js', 'api-middleware!', { path: '/', maxAge: 2592000 })
  //   res.end(res.getHeader('Set-Cookie'))
  console.log("Data", req.body);

  // res.status(200).json({ name: "John" });
  res.status(200).json({ name: "John", email: "kotod@gmail.com" });
};

export default handler;
