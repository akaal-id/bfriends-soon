"use client";

import { useState } from "react";
import { Mail, ArrowUpRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="w-full">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-bfriends-beige/70" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-bfriends-orange-100 focus:border-transparent transition-all"
              />
            </div>
            <button
              className="w-full group flex items-stretch shadow-lg transform hover:scale-[1.02] transition-transform cursor-pointer"
            >
              <span className="flex-1 flex items-center justify-left px-4 py-2 bg-bfriends-orange-100 rounded-xl text-white font-normal font-pontano group-hover:bg-bfriends-orange-100/90 transition-all">
                Join Waiting List
              </span>
              <span className="flex items-center justify-center px-4 bg-bfriends-orange-100 rounded-xl text-white group-hover:bg-bfriends-orange-100/90 transition-all">
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
            className="space-y-6"
          >
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-bfriends-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-belleza text-xl mb-2">You're on the list!</h3>
              <p className="text-white/80 font-pontano text-sm">
                Thank you for joining our movement. We'll keep you updated on our launch.
              </p>
            </div>
            
            <button
              onClick={handleReset}
              className="w-full group flex items-stretch shadow-lg transform hover:scale-[1.02] transition-transform cursor-pointer"
            >
              <span className="flex-1 flex items-center justify-left px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white font-normal font-pontano group-hover:bg-white/20 transition-all">
                Add another email
              </span>
              <span className="flex items-center justify-center px-4 bg-white/10 border border-white/20 rounded-xl text-white group-hover:bg-white/20 transition-all">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

