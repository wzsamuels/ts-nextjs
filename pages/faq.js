import Head from 'next/head';

const faqs = [
  {
    title: "What are you prices?",
    body: `When don't post This is sort of like asking`
  },
]

const Faq = () => {
  return (
    <>
      <Head>
        <title>FAQ | Twin Silver</title>
      </Head>
      <div className="flex flex-col items-center">
        <h1 className="header-largest">FAQ</h1>
      </div>
    </>
  )
}

export default Faq