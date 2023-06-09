import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum{" "}
        </p>
        <p className={styles.text}>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum{" "}
        </p>
        <Link href="/ninjas" className={styles.btn}>
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}
