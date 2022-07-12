import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";

export default function Layout({ title, children, keywords, description }) {
  return (
    <div className="static min-h-screen flex flex-col justify-between ">
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Search />
      <main className="container mx-auto my-7 flex-1">{children}</main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Welcome to DevSpace",
  keywords: "development, coding, programming",
  description: "the best info and news in development",
};
