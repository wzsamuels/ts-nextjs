import { getProviders, signIn } from "next-auth/react";
import googleSignIn from '../../public/assets/images/auth/btn_google_signin_dark_normal_web@2x.png'
import facebookLogo from '../../public/assets/images/auth/f_logo_RGB-White_58.png'
import Image from "next/legacy/image";
import React, {useState} from "react";

const authLogos = {google: googleSignIn, facebook: facebookLogo}

export default function SignIn({ providers }) {
  const [email, setEmail] = useState("")

  const onSubmit = e => {
    window.alert(email)
    e.preventDefault()
    signIn("email", { callbackUrl: '/account', email: email })
      .then(res => console.log(res))
  }

  const renderProvider = (provider) => {
    console.log(provider)
    switch (provider.id) {
      case "google":
        return (
          <div className="cursor" key={provider.name}>
            <Image
              onClick={() => signIn(provider.id, {callbackUrl: '/account'})}
              src={authLogos[provider.id]}
              alt={"Login in with your Google account"}
            />
          </div>
        )
      case "facebook":
        return (
          <div className="rounded flex justify-between items-center bg-[#1877F2] w-[370px] h-[80px] my-4" key={provider.name}>
            <div className="py-4 px-2 mr-4">
              <Image
                layout='fixed'
                width={70}
                height={70}
                onClick={() => signIn(provider.id, {callbackUrl: '/account'})}
                src={authLogos[provider.id]}
                style={{flexBasis: '70px'}}
                alt={"Login in with your Facebook account"}
              />
            </div>
            <div className="text-2xl" style={{flex: 'auto'}}>
              Sign in with Facebook
            </div>
          </div>
        )
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="header-largest my-8">
        What can we do for you?
      </h1>
      {providers && Object.values(providers).map((provider) =>
        provider && renderProvider(provider)
      )}

      <form onSubmit={onSubmit} className="mt-8 flex flex-col max-w-full not-last:mb-6">
        <label>
          Email address:&nbsp;
          <input
            className="input"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            name="email" />
        </label>
        <button className="button" type="submit">Sign in with Email</button>
      </form>
    </div>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: { providers },
  }
}