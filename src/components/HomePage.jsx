import React from "react";
import clsx from "clsx";
import "../css/custom.css";
import styles from "../pages/index.module.css";
export default function HomePage() {
  return (
    <header>
      <br />
      <br />
      <div className="container avatar avatar--vertical">
        <img
          className="avatar__photo avatar__photo--xxl m-avatar"
          src="https://media.discordapp.net/attachments/853661005871185950/858966288570515476/SPOILER_whirldev.gif"
          alt="my pic"
        />
        <h1 className="hero__title cyan-text">Whirl</h1>
      </div>
    </header>
  );
}
//© 2021 Whirl.  All Rights Reserved.
