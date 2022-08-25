import { getSortedPostsData } from '../../lib/posts';
import Link from "next/link";
import Date from "../../components/atoms/Date";
import Image from "next/image";
import styled from "styled-components";
import Card from "../../components/atoms/Card";
import ImageStyled, {ImageWrapper} from "../../components/atoms/ImageStyled";

const PostWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  
  > * {
    margin: 0;
  }
`

const PostList = styled.ul`
`

const PostListItem = styled.li`
`

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

const PostImageWrapper = styled.div`
  width: 100%;

  > div {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`

const PostCard = styled(Card)`
  padding: 2rem 0;
  //width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
`

export default function PostsIndex( {allPostsData}) {
  return (
    <PostWrapper>
      <h2 className="text-xl">Blog</h2>
      <div className="py-8 w-full flex flex-col flex-wrap items-center">
        {allPostsData.map(({id, date, title, image}) => (
          <Link  key={id} href={`/posts/${id}`}>
            <a className="py-4 w-full my-4 mx-0 flex flex-col items-center">
              <PostCard>
                <div className="">
                  <h2 className="header-extra-large my-4 ">{title}</h2>
                  <p className="my-4"><Date dateString={date} /></p>
                </div>
                <div className="w-[95%]">
                  <ImageWrapper className=" self-center">
                    <ImageStyled width={1200} height={800} alt="Current Image" src={image}/>
                  </ImageWrapper>
                </div>
              </PostCard>
            </a>
          </Link>
        ))}
      </div>
    </PostWrapper>
  )
}