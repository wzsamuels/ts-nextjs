import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from "next/head";
import Date from "../../components/Date";
import Image from "next/image";

export async function getStaticProps({ params }) {

  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl lg:text-[40px] my-6 text-center">{postData.title}</h1>
          <Date className="my-6 text-center" dateString={postData.date} />
        </div>
        <div className="my-6 flex justify-center w-full max-w-[800px]">
          <Image className="rounded shadow" width={600} height={400} src={postData.image}/>
        </div>
      </div>
      {/*Replace with PostGrid when there's sidebar content*/}
        {/*lg:pl-[130px]*/}
        <article
          className="max-w-textbox w-full prose-invert prose-lg md:prose-xl prose-list-style:inside prose-h2:text-center px-4  prose-img:rounded-2xl lg:pr-4"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
        {/*
        <div className="justify-self-center">
          Prev Posts
        </div>
        */}
    </div>
  );
}