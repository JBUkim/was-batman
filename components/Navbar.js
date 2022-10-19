import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/profile">
          <a>Profile</a>
        </Link>

        <Link href="/batman">
          <a>Batman</a>
        </Link>
      </div>
    </div>
  );
}