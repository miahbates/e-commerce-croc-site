import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <title>Crocacholics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* add custom fonts */}
      </Head>
      <header>
        {home ? (
          <div>
            <h1> Crocacholics</h1>
            <Link href="/basket">
              <a>Basket</a>
            </Link>
          </div>
        ) : (
          <div>
            <h1> Crocacholics</h1>
            <Link href="/">
              <a>Back to home</a>
            </Link>
            <Link href="/basket">
              <a>Basket</a>
            </Link>
          </div>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
