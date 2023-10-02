import React from "react";
import clsx from "clsx";
import "../css/custom.css";
import Link from "@docusaurus/Link";
import styles from "../pages/index.module.css";
export default function HomePage() {
  return (
    <header>
      <br></br>
      <div className="container avatar avatar--vertical">
        <img
          className="avatar__photo avatar__photo--xxl m-avatar"
          src="https://media.discordapp.net/attachments/853661005871185950/858966288570515476/SPOILER_whirldev.gif"
          alt="my pic"
        />
        <h1 className="hero__title cyan-text">Whirl</h1>
      </div>
      <p className="hero__subtitle text-center e">
        Heyy there <b>👋</b>!<br></br> Whirl is a <i>professional</i> <br></br>
        <b>procrastinator 😒</b> & a <i>part-time </i> <b>programmer</b>{" "}
        <br></br>who likes <i>reading</i> <br></br>
        <b>🤔 manga & novels</b> , he also enjoys <i>listening</i>
        <br></br>
        to <b>raps and rock songs🤘</b>
        <br></br>
        <Link to="/blog" class="button  button--info">
          📖 Blog
        </Link>
        <a
          href="https://github.com/Whirl21/Website"
          target="_blank"
          class="button  button--info"
        >
          📂 Source
        </a>
      </p>
    </header>
  );
}
//© 2021 Whirl.  All Rights Reserved.
