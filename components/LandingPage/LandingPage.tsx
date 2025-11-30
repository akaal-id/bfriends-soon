"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronDown, Mail, ArrowUpRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import anime from "animejs";
import styles from "./LandingPage.module.css";
import LogoHeader from "./LogoHeader";
import HeroContent from "./HeroContent";
import SubscriptionForm from "./SubscriptionForm";

// Utility for classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Placeholder images from Unsplash
const IMAGES = [
  "/images/venue/Spa-1.png", // Top Center: Yoga/Wellness
  "/images/venue/couple-1.jpg", // Middle Left: Nature/Calm (Couple)
  "/images/venue/Gym-2.jpg", // Middle Right: Friends/Gym
  "/images/venue/Gym-1.png", // Bottom Left: Peaceful/Interior
  "/images/venue/Spa-2.png", // Bottom Right: Joy/Interior
  // "/images/venue/Spa-1.png", // Hero: Ocean/Beach/Building (Bottom Center) - This is now a video
];

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth scroll progress for fluid animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    // restDelta: 0.001
  });

  // Animations driven by scroll
  // 0 -> 0.5: Hero image expands, other elements fade out
  // 0.5 -> 1.0: Form content fades in

  // Hero Image Transformation
  const heroScale = useTransform(smoothProgress, [0, 0.5], [1, 3.5]); // Scale up significantly to cover
  const heroY = useTransform(smoothProgress, [0, 0.5], ["0%", "-50%"]); // Move up to center
  
  return (
    <div ref={containerRef} className={styles.container}>
       <div className={styles.stickyWrapper}>
          <ScrollContent progress={smoothProgress} />
       </div>
    </div>
  );
}

function ScrollContent({ progress }: { progress: any }) {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const animateImages = () => {
    if (!imageContainerRef.current || !videoContainerRef.current) return;

    const images = imageContainerRef.current.querySelectorAll('.reveal-image');
    const video = videoContainerRef.current;

    anime({
      targets: [images, video],
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 1200,
      easing: 'easeOutQuad'
    });
  };

  // Elements fading out as we scroll down (0 -> 0.3)
  const contentOpacity = useTransform(progress, [0, 0.2], [1, 0]);
  const contentY = useTransform(progress, [0, 1], [0, -420]);
  const contentScale = useTransform(progress, [0, 0.2], [1, 0.95]);

  // Hero Image Expansion (0 -> 0.5)
  const heroWidth = useTransform(progress, [0, 0.5], ["30%", "100%"]);
  const heroHeight = useTransform(progress, [0, 0.5], ["25%", "100%"]);
  const heroBottom = useTransform(progress, [0, 0.5], ["-5%", "0%"]);
  
  const heroContainerWidth = useTransform(progress, [0, 0.5], ["30%", "100%"]);
  const heroContainerHeight = useTransform(progress, [0, 0.5], ["30vh", "100vh"]);
  const heroContainerBottom = useTransform(progress, [0, 0.5], ["-15vh", "0vh"]);
  
  // New Section Content (Form) (0.5 -> 0.8)
  const formOpacity = useTransform(progress, [0.4, 0.6], [0, 1]);
  const formY = useTransform(progress, [0.4, 0.6], [50, 0]);

  // Image darkening for background
  const imageBrightness = useTransform(progress, [0.4, 0.6], ["brightness(1)", "brightness(0.8)"]);

  // Toggle pointer events for form so it doesn't block content when invisible
  const formPointerEvents = useTransform(progress, [0.35, 0.4], ["none", "auto"]);

  const handleScrollToForm = () => {
    window.scrollTo({ top: window.innerHeight * 1.2, behavior: 'smooth' });
  };

  return (
    <div className={styles.contentWrapper}>
      
      <LogoHeader />

      {/* Layer 1: Initial Content (Text & Floating Images) */}
      <motion.div 
        className={styles.layer1}
        style={{ opacity: contentOpacity, y: contentY, scale: contentScale }}
        ref={imageContainerRef}
      >
        <HeroContent onButtonAnimationStart={animateImages} />

        {/* Floating Images */}
        {/* Top Center */}
        <div className="absolute top-[-10%] md:top-[-10%] left-1/2 -translate-x-1/2 w-48 md:w-128 aspect-video filter brightness-60 reveal-image" style={{ opacity: 0 }}>
           <img src={IMAGES[0]} className={styles.floatingImageImg} />
        </div>
        {/* Middle Left */}
        <div className="absolute top-64 left-[-10%] md:left-[-10%] -translate-y-1/2 w-40 md:w-128 aspect-video hidden md:block reveal-image" style={{ opacity: 0 }}>
          <img src={IMAGES[1]} className={styles.floatingImageImg} />
        </div>
        {/* Middle Right */}
        <div className="absolute top-64 right-[-10%] md:right-[-10%] -translate-y-1/2 w-40 md:w-128 aspect-video hidden md:block reveal-image" style={{ opacity: 0 }}>
          <img src={IMAGES[2]} className={styles.floatingImageImg} />
        </div>
        {/* Bottom Left */}
        <div className="absolute bottom-4 md:bottom-[-10%] left-4 md:left-[-10%] w-72 md:w-128 aspect-video hidden md:block reveal-image" style={{ opacity: 0 }}>
           <img src={IMAGES[3]} className={styles.floatingImageImg} />
        </div>
        {/* Bottom Right */}
        <div className="absolute bottom-4 md:bottom-[-10%] right-4 md:right-[-10%] w-72 md:w-128 aspect-video hidden md:block reveal-image" style={{ opacity: 0 }}>
           <img src={IMAGES[4]} className={styles.floatingImageImg} />
        </div>
      </motion.div>

      {/* Layer 2: Hero Image (Expands to Background) */}
      <motion.div
        className={styles.layer2}
        ref={videoContainerRef}
        style={{
            width: heroContainerWidth,
            height: heroContainerHeight,
            bottom: heroContainerBottom,
            opacity: 0 // Start invisible for anime.js to fade in
        }}
      >
        <motion.video
            src="/videos/hero/Venue-4.mp4"
            autoPlay
            loop
            muted
            playsInline
            className={styles.heroVideo}
            style={{ filter: imageBrightness }}
        />
      </motion.div>

      {/* Layer 3: Form Content */}
      <motion.div
        id="subscription-form"
        className={styles.layer3}
        style={{ opacity: formOpacity, y: formY, pointerEvents: formPointerEvents }}
      >
        <h2 className={styles.formTitle}>
          Join the Movement
        </h2>
        <p className={styles.formSubtitle}>
          Be the first to know when we launch our new wellness experience.
        </p>

        <SubscriptionForm />
        
        <p className={styles.privacyText}>
          We respect your privacy. No spam, ever.
        </p>
      </motion.div>

    </div>
  );
}
