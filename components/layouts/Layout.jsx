import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const siteTitle = "Next.js Drink Shop";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="A Simple Shop using Next.js" />
        <title>{siteTitle}</title>
      </Head>
      <Navbar brand={"Drink"} color={"dark"} />
      <main className="container content-container">{children}</main>
      <Footer />
    </>
  );
}
