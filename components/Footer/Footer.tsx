"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email && !isSubmitting) {
      setIsSubmitting(true);
      
      // Google Form submission details
      const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSclRqNzLi-46Dnn36_fYoOP1XCw9EAcIAt8U_xAEjHPuKQBGg/formResponse";
      const ENTRY_ID = "entry.18557205";

      const formData = new FormData();
      formData.append(ENTRY_ID, email);

      try {
        await fetch(GOOGLE_FORM_ACTION_URL, {
          method: "POST",
          mode: "no-cors",
          body: formData,
        });
        
        setIsSubmitted(true);
        setEmail("");
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Logo & Address */}
          <div className={styles.column1}>
            <img 
              src="/images/icons/logo-bfriends hor.png" 
              alt="bfriends" 
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
              <a href="https://bwork.id" target="_blank" rel="noopener noreferrer" className={styles.menuItem}>BWork</a>
              <a href="https://bnesta.id" target="_blank" rel="noopener noreferrer" className={styles.menuItem}>BNesta</a>
              <a href="https://blive.id" target="_blank" rel="noopener noreferrer" className={styles.menuItem}>BLive</a>
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
            <h3 className={styles.heading}>Get our latest updates,<i className="font-semibold text-bfriends-orange-100"> friends!</i></h3>
            {!isSubmitted ? (
              <form className={styles.newsletterForm} onSubmit={handleSubmit}>
                <div className={styles.newsletterInputWrapper}>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email" 
                    required
                    className={styles.newsletterInput}
                    disabled={isSubmitting}
                  />
                </div>
                <button className={styles.submitButton} disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.7 : 1 }}>
                  <span className={styles.submitButtonText}>
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
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
        </div>
      </div>
    </footer>
  );
}
