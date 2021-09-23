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
          src="img/whirll.gif"
          alt="github pic"
        />
        <h1 className="hero__title cyan-text">Whirl</h1>
      </div>
    </header>
  );
}
//© 2021 Whirl.  All Rights Reserved.
