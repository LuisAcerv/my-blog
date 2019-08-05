import React from "react";
import styles from "./Bio.module.css";
import avatar from "../assets/avatar.png";

function Bio(props) {
  let photoURL = avatar;

  return (
    <div
      className={`
      ${styles.Bio}
      ${props.className || ""}
    `}
    >
      <img src={photoURL} alt="Me" />
      <p>
        Hello, there I am Luis Acerv, a full stack developer and
        entrepreneur. Welcome! this is a place I am building for you, here I
        will publish my blog posts, tutorials, and courses. I hope you enjoy
        the content and I will be happy to help you in your journey as a
        developer.
      </p>
    </div>
  );
}

export default Bio;
