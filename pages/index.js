import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="author" content="jinuk"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.homeTitle}>Home</h1>
        <div className={styles.subfont}>
          <marquee width="500px">
            <Link href="about">
              <a>About</a>
            </Link>
            &nbsp;/&nbsp;
            <Link href="profile">
              <a>Profile</a>
            </Link>
            &nbsp;/&nbsp;
            <Link href="Fragment">
              <a>Fragment</a>
            </Link>
            &nbsp;/&nbsp;
            <Link href="coins">
              <a>Coins</a>
            </Link>
            &nbsp;/&nbsp;
            <Link href="pokemon">
              <a>Pokemon</a>
            </Link>
          </marquee>
        </div>
        <div className={styles.mainfoot}>
          Copyright © 2022 WAS / made by Leejinuk
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
