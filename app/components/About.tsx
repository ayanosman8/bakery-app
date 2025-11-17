"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-rose-500/5"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-extralight tracking-tight mb-6">
            <span className="bg-gradient-to-r from-pink-400 via-rose-300 to-pink-400 bg-clip-text text-transparent">
              Our Story
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Where French tradition meets local love, and passion becomes perfection
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-pink-500/10 to-rose-500/10 backdrop-blur-xl rounded-3xl border border-pink-300/20 overflow-hidden aspect-[4/3]">
              {/* Placeholder Content */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Sparkles className="w-16 h-16 text-pink-400/40 mx-auto" />
                  <p className="text-white/40 font-light">Bakery Interior Image</p>
                </div>
              </div>
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-transparent to-rose-500/20 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-extralight text-white">
              Baking traditions that{" "}
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                taste like home
              </span>
            </h3>
            <p className="text-lg text-white/70 font-light leading-relaxed">
              Founded in 2018, La Rose Pâtisserie was born from a passion for authentic French
              baking and a desire to bring traditional artisan pastries to our community. Our head
              baker, trained in the heart of Paris, brings generations of expertise to every
              croissant, macaron, and baguette.
            </p>
            <p className="text-lg text-white/70 font-light leading-relaxed">
              We rise before dawn each day to ensure everything is baked fresh, using only the
              finest ingredients—European butter, local organic eggs, and flour milled from heritage
              grains. Every bite tells a story of dedication, tradition, and the pure joy of
              handcrafted baking.
            </p>

            {/* Mission Statement Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-gradient-to-br from-pink-500/10 to-rose-500/10 backdrop-blur-xl rounded-2xl border border-pink-300/20 p-6 text-center">
                  <Heart className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                  <h4 className="text-sm font-light text-white/90 uppercase tracking-wider">Made with Love</h4>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-gradient-to-br from-rose-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl border border-pink-300/20 p-6 text-center">
                  <Sparkles className="w-8 h-8 text-rose-400 mx-auto mb-3" />
                  <h4 className="text-sm font-light text-white/90 uppercase tracking-wider">Fresh Daily</h4>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-gradient-to-br from-pink-500/10 to-rose-500/10 backdrop-blur-xl rounded-2xl border border-pink-300/20 p-6 text-center">
                  <Zap className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                  <h4 className="text-sm font-light text-white/90 uppercase tracking-wider">Artisan Quality</h4>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
