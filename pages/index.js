import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Calculator from "../components/Calculator";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Save with EVs</title>
        <meta
          name="description"
          content="Save with EVs is an IB Group 4 project created by Amal, Ahaan, Vedant, Ryan and Shriya to increase awareness about the benefits of EVs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={styles.main}>
        <Calculator />
      </main>
    </div>
  );
}
