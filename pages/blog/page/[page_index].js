import Layout from "@/components/Layout";
import fs from "fs";
import path from "path";
import Post from "@/components/Post";
import { POSTS_PER_PAGE } from "@/config/index";
import Pagination from "@/components/Pagination";
import CategoryList from "@/components/CategoryList";
import { getPosts } from "@/lib/posts";

export default function BlogPage({ posts, numPages, currentPage, categories }) {
  return (
    <Layout>
      <div className="flex items-center mx-4 sm:mx-0 justify-between border-b-2 border-accent">
        <h1 className="sm:text-5xl text-4xl py-5">Blog</h1>
        <CategoryList categories={categories} />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
      <Pagination currentPage={currentPage} numPages={numPages} />
      <div className="w-1/4"></div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);
  let paths = [];
  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() },
    });
  }
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = parseInt((params && params.page_index) || 1);

  const files = fs.readdirSync(path.join("posts"));
  const posts = getPosts();
  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category);
  const uniqueCategories = [...new Set(categories)];

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);
  const pageIndex = page - 1;
  const orderedPosts = posts.slice(
    pageIndex * POSTS_PER_PAGE,
    (pageIndex + 1) * POSTS_PER_PAGE
  );
  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
      categories: uniqueCategories,
    },
  };
}
