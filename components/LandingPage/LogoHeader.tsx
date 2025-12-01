"use client";

import { motion } from "framer-motion";
import styles from "./LogoHeader.module.css";

export default function LogoHeader() {
  return (
    <div className={styles.logoHeader}>
      <img 
        src="/images/icons/logo-bfriends ver.png" 
        alt="bfriends" 
        className={styles.logoImage} 
      />
      <span className={styles.logoText}>
        kerobokan wellness center
      </span>
    </div>
  );
}

