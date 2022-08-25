import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from "next/head";
import Date from "../../components/atoms/Date";
import styles from "../../styles/post.module.scss"
import ImageStyled, {ImageWrapper} from "../../components/atoms/ImageStyled";

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
    <div className="flex flex-col justify-center items-center">
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className="text-4xl md:text-5xl py-4">{postData.title}</h1>
      <Date dateString={postData.date} />
      <ImageWrapper>
        <ImageStyled width={1200} height={800} src={postData.image}/>
      </ImageWrapper>
      <article className="prose-invert prose-lg md:prose-xl prose-list-style: inside px-4"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
}