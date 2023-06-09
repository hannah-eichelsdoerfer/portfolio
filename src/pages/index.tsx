import Head from "next/head";
import Image from "next/image";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hannah Eich</title>
        <meta name="description" content="Hannah Eich" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />

        {/* Social Sharing */}
        <meta property="og:title" content="Hannah Eich Portfolio" />
        <meta
          property="og:description"
          content="Fullstack Developer - visit my portfolio page to view my contact info, resume, and projects"
        />
        <meta property="og:image" content="/images/portfolio.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta property="og:url" content="https://hannaheich.com" />
        <meta property="og:type" content="portfolio website" />
      </Head>

      <Hero />
    </>
  );
}
