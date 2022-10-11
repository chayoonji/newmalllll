import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout title="Home">
      <div>
        <div className="bg-yellow-0">
          <h1 className="text-4xl font-bold">NextMall with Tailwind CSS</h1>
          <p>웹서버보안프로그래밍차윤지</p>
        </div>
      </div>
    </Layout>
  );
}
