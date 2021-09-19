import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

import "../css/custom.css";
import HomePage from "../components/HomePage";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="Whirl is a full stack developer.">
      <HomePage />
      <p className="hero__subtitle text-center">
        Heyy There <b>👋</b>! I am Whirl a self taught full stack developer. I
        am currently learning new javascript <i>frameworks</i> and db's. I love
        playing online games and programming, Though rather unlike some of my
        friends i do not aspire to be a programmer. I'm <i>as of now</i> a 13
        year old <b>student</b> which effectively means i run short on time due
        to studies and other stuff.
        <br />
        Feel free to tag me on{" "}
        <a href="https://twitter.com/Whirl_21">twitter</a> or join this{" "}
        <a href="https://discord.gg/jCtAPhKDee">discord server</a> if you would
        like to get in touch with me.
        <br />
      </p>
    </Layout>
  );
}
