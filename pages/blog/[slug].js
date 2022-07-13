import React from "react";
import Link from "next/dist/client/link";
import Layout from "@/components/Layout";
import CategoryLabel from "@/components/CategoryLabel";
// import { marked } from "marked";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import ReactMarkdown from "react-markdown";
import CodeBlock from "@/components/Codeblock";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function PostPage({
  frontmatter: { title, category, date, cover_image, author_image, author },
  content,
  slug,
}) {
  return (
    <Layout title={title}>
      <div className="lg:w-9/12 w-11/12  mx-auto">
        <Link href="/blog">
          <a className="cursor-pointer hover:text-accent inline-block">
            <FaLongArrowAltLeft size={30} />
          </a>
        </Link>
      </div>

      <div className="lg:w-9/12 w-11/12  mx-auto px-8 py-6 bg-base-300 rounded-md shadow-md ">
        <h1 className="text-5xl">{title}</h1>
        <div className="flex justify-between items-center my-4">
          <div className="font-bold">{date}</div>
          <CategoryLabel>{category}</CategoryLabel>
        </div>
        <img
          src={cover_image}
          alt=""
          className="w-full rounded h-96 object-cover"
        />

        <div className="blog-text mt-8">
          {/* <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div> */}
          <ReactMarkdown components={CodeBlock}>{content}</ReactMarkdown>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);
  const contentHtml = processedContent.toString();
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
