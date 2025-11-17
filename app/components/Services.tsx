"use client";

import React from "react";
import { motion } from "framer-motion";
import { Croissant, Cake, Coffee, Sparkles, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Croissant className="w-8 h-8" />,
      title: "Viennoiserie",
      description: "Buttery, flaky croissants, pain au chocolat, and traditional French pastries made with laminated dough and European butter.",
      features: ["Classic Croissants", "Pain au Chocolat", "Brioche", "Danish Pastries"],
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <Cake className="w-8 h-8" />,
      title: "Custom Cakes",
      description: "Bespoke celebration cakes and elegant desserts for your special occasions. Each creation is a work of art tailored to your vision.",
      features: ["Wedding Cakes", "Birthday Cakes", "Macarons", "Tarts & Éclairs"],
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Café & Catering",
      description: "Enjoy our pastries fresh with artisan coffee in our cozy café, or let us cater your next event with our selection of treats.",
      features: ["Specialty Coffee", "Event Catering", "Gift Boxes", "Corporate Orders"],
      color: "from-pink-600 to-rose-600",
    },
  ];

  return (
    <section id="services" className="py-32 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-pink-500/5"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-rose-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

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
            <span className="text-white">What We </span>
            <span className="bg-gradient-to-r from-pink-400 via-rose-300 to-pink-400 bg-clip-text text-transparent">
              Bake
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Fresh artisan pastries and custom creations for every occasion
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500`}></div>

              {/* Card */}
              <div className="relative bg-gradient-to-br from-pink-500/5 to-rose-500/5 backdrop-blur-xl rounded-3xl border border-pink-300/20 overflow-hidden h-full flex flex-col">
                {/* Image Placeholder */}
                <div className="relative aspect-video bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center overflow-hidden">
                  {/* Placeholder Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="w-16 h-16 text-pink-400/30" />
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/30 via-transparent to-rose-500/30"></div>
                  {/* Service Icon Badge */}
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-pink-500/80 to-rose-500/80 backdrop-blur-sm rounded-2xl p-4 border border-pink-300/30">
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-extralight text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-white/70 font-light leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-pink-400 to-rose-400"></div>
                        <span className="text-sm text-white/60 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <button className="group/btn flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors font-light">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-white/60 font-light mb-6">
            Craving something sweet?
          </p>
          <button className="relative group overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative px-8 py-4 rounded-full text-white font-light tracking-wide text-lg border-2 border-pink-400/60 hover:border-pink-300 transition duration-300 bg-transparent">
              View Full Menu
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
