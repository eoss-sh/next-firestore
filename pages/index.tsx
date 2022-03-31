import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import toast from "react-hot-toast";

const Home: NextPage = () => {
  return (
    <div>
      <button onClick={() => toast.success("toasted")}>Toast Me</button>
    </div>
  );
};

export default Home;
