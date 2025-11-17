"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Heart, Star } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const text =
    "Artisan Pastries. French Elegance. Sweet Perfection.";

  // Split the text into words
  const words = text.split(" ");

  // Define gradient for the highlighted text on a dark background
  const colorfulGradientClasses =
    "bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-300 to-pink-400";

  return (
    <section
      ref={containerRef}
      id="home"
      className="pt-32 pb-20 w-full min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background Effects - pink/rose gradient theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-rose-500/5"></div>

      {/* Animated gradient orbs */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-full blur-3xl"
      ></motion.div>

      {/* Additional decorative orb */}
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -30]),
          opacity: useTransform(scrollYProgress, [0, 0.5], [0.3, 0])
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-pink-400/10 via-rose-400/10 to-pink-400/10 rounded-full blur-3xl"
      ></motion.div>

      {/* Floating particles */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {i % 3 === 0 && <Sparkles className="w-4 h-4 text-pink-400/40" />}
              {i % 3 === 1 && <Heart className="w-3 h-3 text-rose-400/40" />}
              {i % 3 === 2 && <Star className="w-4 h-4 text-pink-400/40" />}
            </motion.div>
          ))}
        </div>
      )}

      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10 px-4">
        {/* Main heading */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-extralight leading-tight text-center tracking-tight">
            {words.map((word, index) => (
              <span
                key={index}
                className={`inline-block ${
                  word === "Artisan" ||
                  word === "Pastries." ||
                  word === "French" ||
                  word === "Elegance." ||
                  word === "Perfection."
                    ? colorfulGradientClasses
                    : "text-white"
                }`}
              >
                {word}
                {index !== words.length - 1 && "\u00A0"}
              </span>
            ))}
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Handcrafted French pastries and artisan breads baked fresh daily with
          love, tradition, and the finest ingredients
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="relative group overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative px-8 py-4 rounded-full text-white font-light tracking-wide text-lg border-2 border-pink-400/60 hover:border-pink-300 transition duration-300 bg-transparent">
              View Menu
            </div>
          </button>

          <button className="relative group overflow-hidden">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-pink-500/20 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative backdrop-blur-sm px-8 py-4 rounded-full text-white/90 font-light tracking-wide text-lg border-2 border-pink-400/30 hover:border-pink-400/60 hover:text-white transition duration-300 bg-transparent">
              Order Online
            </div>
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 rounded-2xl blur-md opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-pink-500/10 to-rose-500/10 backdrop-blur-xl rounded-2xl border border-pink-300/20 px-8 py-6 min-w-[140px]">
              <div className="text-center">
                <motion.div
                  className="text-4xl md:text-5xl font-extralight bg-gradient-to-r from-pink-300 via-rose-300 to-pink-300 bg-clip-text text-transparent mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  Daily
                </motion.div>
                <div className="text-xs text-white/70 font-light uppercase tracking-widest">Fresh Baked</div>
                <div className="mt-2 h-0.5 w-12 mx-auto bg-gradient-to-r from-transparent via-pink-400/50 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative group"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 rounded-2xl blur-md opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-rose-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl border border-pink-300/20 px-8 py-6 min-w-[140px]">
              <div className="text-center">
                <motion.div
                  className="text-4xl md:text-5xl font-extralight bg-gradient-to-r from-rose-300 via-pink-300 to-rose-300 bg-clip-text text-transparent mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                >
                  Est. 2018
                </motion.div>
                <div className="text-xs text-white/70 font-light uppercase tracking-widest">Traditional</div>
                <div className="mt-2 h-0.5 w-12 mx-auto bg-gradient-to-r from-transparent via-rose-400/50 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative group"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 rounded-2xl blur-md opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-pink-500/10 to-rose-500/10 backdrop-blur-xl rounded-2xl border border-pink-300/20 px-8 py-6 min-w-[140px]">
              <div className="text-center">
                <motion.div
                  className="text-4xl md:text-5xl font-extralight bg-gradient-to-r from-pink-300 via-rose-300 to-pink-300 bg-clip-text text-transparent mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                >
                  5★
                </motion.div>
                <div className="text-xs text-white/70 font-light uppercase tracking-widest">Rated</div>
                <div className="mt-2 h-0.5 w-12 mx-auto bg-gradient-to-r from-transparent via-pink-400/50 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center pt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-pink-300/30 rounded-full flex justify-center p-1 backdrop-blur-sm"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-1.5 h-1.5 bg-gradient-to-b from-pink-400 to-rose-400 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
