import { getSortedPostsData } from '../../lib/posts';
import Link from "next/link";
import Date from "../../components/atoms/Date";
import Image from "next/image";
import styled from "styled-components";
import Card from "../../components/atoms/Card";
import ImageStyled, {ImageWrapper} from "../../components/atoms/ImageStyled";
import FlexColumn from "../../components/atoms/FlexColumn";

const PostWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
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
  display: flex;
  flex-direction: column;

  max-width: 900px;
`

export default function PostsIndex( {allPostsData}) {
  return (
    <FlexColumn center>
      <h1 className="header-largest my-8">Twin Silver&apos;s Blog</h1>
      <FlexColumn center className="my-4 w-full flex-wrap">
        <h2 className="header-large">Coming Soon!</h2>
        {allPostsData.map(({id, date, title, image, published}) => (
          <>

            { published &&
              <Link key={id} href={`/posts/${id}`}>
                <a className="py-4 w-full my-4 mx-0 flex flex-col items-center">
                  <PostCard>
                    <div className="px-4">
                      <h2 className="text-3xl md:text-4xl my-4 ">{title}</h2>
                      <p className="my-4"><Date dateString={date}/></p>
                    </div>
                    <div className="">
                      <ImageWrapper className="w-[95%] my-4 mx-auto">
                        <ImageStyled width={1200} height={800} alt="Current Image" src={image}/>
                      </ImageWrapper>
                    </div>
                  </PostCard>
                </a>
              </Link>
            }
          </>
        ))}
      </FlexColumn>
    </FlexColumn>
  )
}