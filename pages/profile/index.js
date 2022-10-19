import React from "react";
import styles from "../../styles/profile.module.css";
import Image from "next/image";
import pic from "../../public/images/profile.jpg";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, } from "react-icons/bs";
import { SiNaver, SiVercel, } from "react-icons/si"


export default function profile() {

  const University = "중부대학교"
  const name = "김다혁"
  const studentnum = "91812103"
  const department = "정보보호학과"
  const email = "hyuk6589@gmail.com"
  

  return (
      <div className={styles.wrap}>
        <h1 className={styles.h1}>Profile</h1>
        <div className={styles.review_box}>
          <div className={styles.slide} id="slide">
            <div className={styles.card}>
              <div className={styles.profile}>
                <div className={styles.image}>
                <Image src={pic} width={70} height={70} />
                </div>
                <div>
                  <h3 className="ml-5"> {name} </h3>
                </div>
              </div>
              <p>
                학교: {University} <br />
                학번: {studentnum} <br />
                학과: {department} <br />
                이메일: {email} <br />
              </p>
                <div className={styles.icon}>
                  <a href="https://www.facebook.com/" className={styles.btn}> 
                    <BsFacebook /> 
                  </a>
                  <a href="https://twitter.com/?lang=ko" className={styles.btn}> 
                    <BsTwitter /> 
                  </a>
                  <a href="https://www.instagram.com/kim.d.bung/" className={styles.btn}>
                    <BsInstagram />
                  </a>
                  <a href="https://www.naver.com" className={styles.btn}> 
                    <SiNaver />
                  </a>
                  <a href="https://github.com/JBUkim" className={styles.btn}>
                    <BsGithub />
                  </a>
                  <a href="https://vercel.com/dashboard" className={styles.btn}>
                    <SiVercel />
                  </a>
                </div>
            </div>
          </div>
          <div className={styles.sidebar}></div>
        </div>
      </div>
  );
}

