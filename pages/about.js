import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function about() {
  const name = "Kim Dahyuk";
  return (
    <div className={styles.about}>
      <h1>About</h1>
      <ul className>
        <li> 이 사이트는 Nextjs 테스트 예제 사이트입니다.</li>
        <li> Copyright © 2022 WAS / made by {name} </li>
      </ul>

      <h2>언어 및 프레임워크</h2>
      <ul>
        <li>웹 프레임워크: Next.js (React)</li>
        <li>데이터베이스: MongoDB</li>
        <li>CSS: Tailwind CSS</li>
      </ul>

      <figure className={styles.figure}>
        <Image src="/images/nextjs.png" width={1200} height={719}></Image>
          <figcaption className={styles.figcaption}>Next.js는 React 기반의 서버 사이드 렌더링 프레임워크이다.</figcaption>
      </figure>

      <figure className={styles.figure}>
        <Image src="/images/mongodb.png" width={1200} height={719}></Image>
          <figcaption className={styles.figcaption}>몽고DB는 크로스 플랫폼 도큐먼트 지향 데이터베이스 시스템이다.</figcaption>
      </figure>

      <figure className={styles.figure}>
        <Image src="/images/tailwind.jpg" width={1200} height={719}></Image>
          <figcaption className={styles.figcaption}>Tailwind CSS는 Utility-First 컨셉을 가진 CSS 프레임워크다.</figcaption>
      </figure>

    </div>
  );
}
