import clientPromise from "../../lib/mongodb";
import {unstable_getServerSession} from "next-auth";
import {authOptions} from "./auth/[...nextauth]";

export default async function handler(req, res) {

  const session = await unstable_getServerSession(req, res, authOptions)

  if (session) {
    const client = await clientPromise;
    const db = client.db("twinsilver");

    const account = await db
      .collection("users")
      .findOne({email: req.body})

    res.status(200).json(account);
  }
  else {
    res.send({
      error: "You must be signed in to view the protected content on this page.",
    })
  }
}