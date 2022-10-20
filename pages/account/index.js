import {useSession} from "next-auth/react";
import Card from "../../components/atoms/Card";
import styled from "styled-components";
import Button from "../../components/atoms/Button";
import clientPromise from "../../lib/mongodb";
import {useEffect, useState} from "react";
import {getObject, listObjects} from "../../lib/s3";
import AWS from "aws-sdk";
import Image from "next/image";
AWS.config.update({
  accessKeyId: 'AKIA6LBVBDRKNUWTLCU5',
  secretAccessKey: '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',
  region: 'us-east-1',
});
const s3 = new AWS.S3({apiVersion: '2006-03-01'});
const AccountCard = styled(Card)`
  width: 100%;
`

export default function AccountPage() {
  const session = useSession()
  const [account, setAccount] = useState({})
  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/mongo', {method: 'post', body: session.data.user.email})
      const data = await response.json()
      setAccount(data)
    }
    const getImages = async () => {
      console.log(account.bucket)
      const body = {bucket: account.bucket}

      const response = await fetch("/api/images", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      const data = await response.json()
      setImages(data)
    }
    fetchData()
      .then(r => 
        getImages()
          .then(r => r)
      )

  },[account.bucket, session.data.user.email])

  return (
    <div className="max-w-screen-xl my-2 mx-auto px-2">
      <h1 className="header-largest py-8">Welcome, {session.data.user.email}!</h1>
      <section className="w-full">
        <div className="my-4">Websites</div>
          <div className="w-full bg-darkShade p-4 rounded">

        </div>
      </section>
      <section>
        {
          account && Object.keys(account).map((key, index) =>
            <div key={index}>{/*{key}: {account[key]*/}</div>
          )}
        <h2 className="header-larger">Images</h2>
        <div className="flex flex-wrap">
        { images?.map((image, index) =>
          index !== 0 &&

            <img width="500" src={image} className="m-4 object-contain"/>
        )}
        </div>
      </section>

    </div>
  )
}

export async function getServerSideProps() {
  const client = await clientPromise;
  const db = client.db("twinsilver");

  const accounts = await db
    .collection("users")
    .find({})
    .limit(20)
    .toArray();

  const images = await listObjects({bucket: "ts-website-images"})
  console.log(images)

  const folder = await getObject()
  console.log(folder)

  return {
    props: {
      accounts: JSON.parse(JSON.stringify(accounts)),
    },
  };
}

AccountPage.auth = true