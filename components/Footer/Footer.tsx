"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Logo & Address */}
          <div className={styles.column1}>
            <img 
              src="/images/icons/logo-bfriends hor.png" 
              alt="B Friends" 
              className={styles.logo} 

            />
            <p className={styles.address}>
              Jl. Teuku Umar Barat No.989x,
              Kerobokan Kelod, Kec. Kuta Utara,
              Kabupaten Badung, Bali 80117
            </p>
          </div>

          {/* Column 2: BLife Ecosystem */}
          <div className={styles.column}>
            <h3 className={styles.heading}>BLife Ecosystem</h3>
            <nav className={styles.menuList}>
              <Link href="#" className={styles.menuItem}>BWork</Link>
              <Link href="#" className={styles.menuItem}>BNesta</Link>
              <Link href="#" className={styles.menuItem}>BLive</Link>
            </nav>
          </div>

          {/* Column 3: Contact Us */}
          <div className={styles.column}>
            <h3 className={styles.heading}>Contact Us</h3>
            <nav className={styles.menuList}>
              <a href="https://instagram.com/bfriends.bali" target="_blank" rel="noopener noreferrer" className={styles.menuItem}>
                Instagram @bfriends.bali
              </a>
              <a href="mailto:hello@bfriends.id" className={styles.menuItem}>
                hello@bfriends.id
              </a>
            </nav>
          </div>

          {/* Column 4: Newsletter */}
          <div className={styles.column2}>
            <h3 className={styles.heading}>Stay Updated</h3>
            {!isSubmitted ? (
              <form className={styles.newsletterForm} onSubmit={handleSubmit}>
                <div className={styles.newsletterInputWrapper}>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    required
                    className={styles.newsletterInput}
                  />
                </div>
                <button className={styles.submitButton}>
                  <span className={styles.submitButtonText}>
                    Subscribe
                  </span>
                  <span className={styles.submitButtonIcon}>
                    <ArrowUpRight size={16} />
                  </span>
                </button>
              </form>
            ) : (
              <div className={styles.successMessage}>
                <Check className={styles.successIcon} size={20} />
                <span>Email successfully sent!</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} BFriends. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="#" className={styles.legalLink}>Privacy Policy</Link>
            <Link href="#" className={styles.legalLink}>Terms of Service</Link>
            <Link href="#" className={styles.legalLink}>Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

