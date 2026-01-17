import Image from "next/image";
import Head from "next/head";
import logoImage from '../public/assets/images/logos/twinsilver.svg'

export default function Home() {
  return (
    <>
      <Head>
        <meta />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-4 text-center">
        <Image className="w-[95%] max-w-[600px] lg:max-w-[700px] mb-8" src={logoImage} alt="Twin Silver Logo" />
        <div className="max-w-4xl">
          <h1 className="font-serif text-4xl md:text-5xl m-0 mb-4">Maintenance Mode</h1>
          <h2 className="font-serif text-3xl md:text-4xl text-pretty mb-6">
            We will be continuing to maintain websites for current customers for the foreseeable future but no new customers will be accepted.
          </h2>
          <p className="text-xl md:text-2xl">
            We appreciate the support from the Raleigh-Durham community.
          </p>
        </div>
      </div>
    </>
  )
}