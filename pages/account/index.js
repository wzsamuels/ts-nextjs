import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";

const accountLinks = [
  {text: "SEO", url: "account/seo"}
]

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
    <>
    <div className="w-full h-[50px] bg-darkerShade">
      {accountLinks.map(link =>
        <a href={link.url}>{link.text}</a>
      )}
    </div>
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
    </>
  )
}

AccountPage.auth = true