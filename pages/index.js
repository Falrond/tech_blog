import Layout from "@/components/Layout";
import Link from "next/link";
import Post from "@/components/Post";
import { getPosts } from "@/lib/posts";

export default function HomePage({ posts }) {
  console.log(posts);
  return (
    <Layout>
      <h1 className="text-5xl py-5 border-b-2 border-accent">
        Najnowsze wpisy
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
      <div className="flex items-center justify-center my-8  w-full">
        <Link href="/blog/">
          <a className="btn bg-base-300 font-bold w-11/12 shadow-md border-none hover:text-accent-focus sm:w-52">
            Wszystkie wpisy
          </a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, 6),
    },
  };
}
