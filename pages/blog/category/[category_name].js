import Layout from "@/components/Layout";
import fs from "fs";
import path from "path";
import Link from "next/link";
import Post from "@/components/Post";
import matter from "gray-matter";
import CategoryList from "@/components/CategoryList";
import { getPosts } from "@/lib/posts";

export default function CategoryBlogPage({ posts, categoryName, categories }) {
  return (
    <Layout>
      <div className="flex items-center justify-between border-b-2 border-accent">
        <h1 className="text-5xl py-5">{categoryName}</h1>
        <CategoryList categories={categories} />
      </div>
      {/* <h1 className="text-5xl py-5 border-b-2 border-accent"></h1> */}
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

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const categories = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return frontmatter.category.toLowerCase();
  });

  const paths = categories.map((category) => ({
    params: { category_name: category },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { category_name } }) {
  const posts = getPosts();
  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category);
  const uniqueCategories = [...new Set(categories)];
  //   Filter posts by category
  const categoryPosts = posts.filter(
    (post) => post.frontmatter.category.toLowerCase() === category_name
  );
  return {
    props: {
      posts: categoryPosts,
      categoryName: category_name,
      categories: uniqueCategories,
    },
  };
}
