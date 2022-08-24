import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import { getSession } from "next-auth/react";
import Sports from "./sport";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Эрнис </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ermis_nawe.png" />
      </Head>

      <h1>Home</h1>
   
    </div>
  );
}
export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        permanent: true, // or false
        destination: "/Login",
      },
    };
  }
  return {
    props: { session },
    redirect: {
      permanent: true, // or false
      destination: "/Home",
    },
  };
  
};
