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
      
    </Layout>
  );
}
