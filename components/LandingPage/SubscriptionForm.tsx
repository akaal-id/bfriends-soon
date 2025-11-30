"use client";

import { useState } from "react";
import { Mail, ArrowUpRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SubscriptionForm.module.css";

export default function SubscriptionForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <div className={styles.formContainer}>
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <div className={styles.inputWrapper}>
              <Mail className={styles.inputIcon} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className={styles.inputField}
              />
            </div>
            <button
              className={styles.submitButton}
            >
              <span className={styles.submitButtonText}>
                Join Waiting List
              </span>
              <span className={styles.submitButtonIcon}>
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={styles.successContainer}
          >
            <div className={styles.successMessage}>
              <div className={styles.successIconWrapper}>
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className={styles.successTitle}>You're on the list!</h3>
              <p className={styles.successText}>
                Thank you for joining our movement. We'll keep you updated on our launch.
              </p>
            </div>
            
            <button
              onClick={handleReset}
              className={styles.submitButton}
            >
              <span className={styles.resetButtonText}>
                Add another email
              </span>
              <span className={styles.resetButtonIcon}>
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

