import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from "next/head";
import Date from "../../components/atoms/Date";
import styles from "../../styles/post.module.scss"
import ImageStyled, {ImageWrapper} from "../../components/atoms/ImageStyled";
import styled from "styled-components";
import FlexColumn from "../../components/atoms/FlexColumn";

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

const PostGrid = styled.div`
  display: grid;
  @media (min-width: 1024px) {
    grid-template-columns: 3fr 1fr;
    justify-content: center;  
  }
  grid-auto-columns: auto;
`

export default function Post({ postData }) {
  return (
    <FlexColumn center>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl lg:text-[40px] my-6 text-center">{postData.title}</h1>
          <Date className="my-6 text-center" dateString={postData.date} />
        </div>
        <ImageWrapper className="my-6 flex justify-center">
          <ImageStyled width={600} height={400} src={postData.image}/>
        </ImageWrapper>
      </div>
          <PostGrid>
        <article className="prose-invert prose-lg md:prose-xl prose-list-style:inside prose-h2:text-center px-4 lg:pl-[130px] lg:pr-4"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            <div className="justify-self-center">
              Prev
            </div>
      </PostGrid>
    </FlexColumn>
  );
}