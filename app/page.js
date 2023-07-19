import Landing from "./pages/Landing";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Testing</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Megrim&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Landing></Landing>
      </main>
      <div className={`bg-darknavy text-gray-200 flex flex-row h-16 justify-center text-sm items-center select-none pr-4 bottom-0`}>
          Made by Qurram using <a href="https://nextjs.org/" className="ml-1 text-green-200">Next.js</a>
        </div>
    </div>
  );
}
