import React from "react";
import Link from "next/dist/client/link";
import Layout from "@/components/Layout";
import CategoryLabel from "@/components/CategoryLabel";
// import { marked } from "marked";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
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
      <div className="lg:w-7/12 w-11/12  mx-auto">
        <Link href="/blog">
          <button className="btn btn-accent mb-5  font-bold">
            {/* <FaLongArrowAltLeft size={30} /> */}
            Wróć
          </button>
        </Link>
      </div>

      <div className="lg:w-7/12 w-full mx-auto px-6 py-6 bg-base-300 sm:rounded-md shadow-md ">
        <h1 className="text-4xl sm:text-5xl">{title}</h1>
        <div className="flex justify-between items-center my-4">
          <div className="font-bold">{date}</div>
          <CategoryLabel>{category}</CategoryLabel>
        </div>
        <img
          src={cover_image}
          alt=""
          className="w-full rounded h-52 sm:h-96 object-cover"
        />

        <div className="blog-text mt-8">
          {/* <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div> */}
          <article className="prose prose-md sm:prose-2xl mx-auto">
            <ReactMarkdown components={CodeBlock} rehypePlugins={[rehypeRaw]}>
              {content}
            </ReactMarkdown>
            {/* <ReactMarkdown>{content}</ReactMarkdown> */}
          </article>
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
