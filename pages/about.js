import React from "react";
import Layout from "@/components/Layout";

export default function AboutPage() {
  return (
    <Layout title="About me">
      <h1 className="sm:text-5xl text-4xl py-5 border-b-2 border-accent mx-4 sm:mx-0">
        O mnie
      </h1>
      <div className="px-10 py-6 mt-6">
        <h3 className="text-2xl mb-5">CodingBay Blog</h3>
        <p className="mb-3">This is a blog built with Next.js and Markdown</p>
        <p>
          <span className="font-bold">Version 1.0.0</span>
        </p>
      </div>
    </Layout>
  );
}
