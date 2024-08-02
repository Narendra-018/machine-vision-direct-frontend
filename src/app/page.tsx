import { Metadata } from "next";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Machine Vision Direct",
  description: "Machine Vision Direct",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <Link href={"/login"}>Login</Link>
    </main>
  );
}
