import { getSortedPostsData } from '../../lib/posts';
import Link from "next/link";
import Date from "../../components/Date";
import Image from "next/legacy/image";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function PostsIndex( {allPostsData}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="header-largest my-8">Twin Silver&apos;s Blog</h1>
      <div className="my-4 w-full flex-wrap flex flex-col justify-center items-center">
        <h2 className="header-larger">Coming Soon!</h2>
        {allPostsData.map(({id, date, title, image, published}) => (
          <>
            { published &&
              <Link className="p-4 w-full my-4 mx-0 flex flex-col max-w-[800px] rounded flex flex-col bg-darkerShade" key={id} href={`/posts/${id}`}>
                <h2 className="text-3xl md:text-4xl my-4 ">{title}</h2>
                <p className="my-4"><Date dateString={date}/></p>
                <Image width={1200} height={800} alt="Current Image" src={image}/>
              </Link>
            }
          </>
        ))}
      </div>
    </div>
  )
}