import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Customers">
      <div className="flex items-center justify-center h-full">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>
      </div>
    </Layout>
  );
};

export default Home;
