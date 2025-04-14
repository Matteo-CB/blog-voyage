import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.svg" alt="facebook logo" width={24} height={24} />
        <Image
          src="/instagram.svg"
          alt="instagram logo"
          width={24}
          height={24}
        />
        <Image
          src="/pinterest.svg"
          alt="pinterest logo"
          width={24}
          height={24}
        />
      </div>
      <div className={styles.logo}>travel idea</div>
      <div className={styles.links}>
        <Link href="/">Accueil</Link>
        <Link href="/">Contact</Link>
        <Link href="/">À propos</Link>
      </div>
    </div>
  );
};

export default Navbar;
