"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Croissant, Cake, Coffee, Sparkles, Heart } from "lucide-react";

const MenuCard = ({ item, index }: { item: any; index: number }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative group"
      initial={{ opacity: 0, y: 100, rotateX: -30, z: -200 }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        z: 0,
        transition: {
          duration: 0.8,
          delay: index * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }}
      viewport={{ once: true, amount: 0.3 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0.5, y: 0.5 });
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {/* Animated rotating glow effect */}
      <motion.div
        className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-2xl blur-lg`}
        animate={{
          opacity: isHovered ? [0.3, 0.6, 0.3] : 0.2,
          scale: isHovered ? [1, 1.05, 1] : 1,
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
      />

      {/* Shimmer effect */}
      <motion.div
        className="absolute -inset-1 rounded-2xl"
        style={{
          background: `linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)`,
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: isHovered ? ["0% 0%", "200% 0%"] : "0% 0%",
        }}
        transition={{
          duration: 1.5,
          repeat: isHovered ? Infinity : 0,
          ease: "linear"
        }}
      />

      {/* Main card with 3D tilt effect */}
      <motion.div
        className="relative bg-gradient-to-br from-pink-500/5 to-rose-500/5 backdrop-blur-xl rounded-2xl border border-pink-300/20 overflow-hidden h-full"
        animate={{
          rotateY: isHovered ? (mousePosition.x - 0.5) * 20 : 0,
          rotateX: isHovered ? (mousePosition.y - 0.5) * -20 : 0,
          y: isHovered ? -10 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Floating particles on hover */}
        {isHovered && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-pink-400 rounded-full"
                initial={{
                  x: Math.random() * 100 + "%",
                  y: "100%",
                  opacity: 0
                }}
                animate={{
                  y: "-20%",
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5 + Math.random(),
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
              />
            ))}
          </>
        )}

        {/* Image section with depth */}
        <motion.div
          className="relative aspect-square bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center overflow-hidden"
          style={{
            transform: isHovered ? "translateZ(40px)" : "translateZ(0px)",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: isHovered
                ? [
                    "radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
                    "radial-gradient(circle at 80% 50%, rgba(251, 113, 133, 0.3) 0%, transparent 50%)",
                    "radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
                  ]
                : "radial-gradient(circle at 50% 50%, transparent 0%, transparent 50%)"
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Icon with 3D pop effect */}
          <motion.div
            className="relative z-10"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
              rotateY: isHovered ? [0, 360] : 0,
            }}
            transition={{
              scale: {
                duration: 0.6,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              },
              rotateY: {
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: "linear"
              }
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <div className={`bg-gradient-to-br ${item.color} bg-opacity-80 backdrop-blur-sm rounded-xl p-3 border border-pink-300/30 shadow-lg`}>
              <div className="text-white">
                {item.icon}
              </div>
            </div>
          </motion.div>

          {/* Decorative elements with parallax */}
          <motion.div
            style={{
              transform: isHovered
                ? `translate(${(mousePosition.x - 0.5) * 20}px, ${(mousePosition.y - 0.5) * 20}px) translateZ(20px)`
                : "translateZ(0px)"
            }}
          >
            <Sparkles className="absolute top-4 right-4 w-5 h-5 text-pink-400/20" />
          </motion.div>
          <motion.div
            style={{
              transform: isHovered
                ? `translate(${(mousePosition.x - 0.5) * -15}px, ${(mousePosition.y - 0.5) * -15}px) translateZ(15px)`
                : "translateZ(0px)"
            }}
          >
            <Heart className="absolute bottom-4 left-4 w-4 h-4 text-rose-400/20" />
          </motion.div>

          {/* Gradient overlay with pulse */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-pink-500/30 via-transparent to-rose-500/30"
            animate={{
              opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3
            }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Content with slide up effect */}
        <motion.div
          className="p-5"
          style={{
            transform: isHovered ? "translateZ(30px)" : "translateZ(0px)",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Category badge with shine */}
          <motion.div
            className="mb-2"
            animate={{
              scale: isHovered ? 1.05 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-light text-pink-300/90 border border-pink-300/20 bg-pink-500/10 relative overflow-hidden">
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: isHovered ? ["-100%", "200%"] : "-100%"
                }}
                transition={{
                  duration: 1,
                  repeat: isHovered ? Infinity : 0,
                  ease: "linear"
                }}
              />
              <span className="relative z-10">{item.category}</span>
            </span>
          </motion.div>

          <motion.h3
            className="text-lg font-extralight text-white mb-2"
            animate={{
              color: isHovered ? ["#ffffff", "#fbcfe8", "#ffffff"] : "#ffffff"
            }}
            transition={{
              duration: 1.5,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut"
            }}
          >
            {item.name}
          </motion.h3>

          <p className="text-sm text-white/60 font-light leading-relaxed">
            {item.description}
          </p>
        </motion.div>

        {/* Corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-400/20 to-transparent rounded-bl-full"
          animate={{
            scale: isHovered ? [1, 1.5, 1] : 1,
            opacity: isHovered ? [0.2, 0.4, 0.2] : 0.2
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default function Menu() {
  const menuItems = [
    {
      icon: <Croissant className="w-6 h-6" />,
      name: "Classic Croissant",
      category: "Viennoiserie",
      description: "Buttery, flaky perfection",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <Cake className="w-6 h-6" />,
      name: "Raspberry Rose Macarons",
      category: "Signature",
      description: "Delicate with rose buttercream",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: <Croissant className="w-6 h-6" />,
      name: "Pain au Chocolat",
      category: "Viennoiserie",
      description: "Dark chocolate in flaky dough",
      color: "from-pink-600 to-rose-600",
    },
    {
      icon: <Cake className="w-6 h-6" />,
      name: "Chocolate Hazelnut Tart",
      category: "Artisan Dessert",
      description: "Rich ganache & hazelnuts",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      name: "Almond Croissant",
      category: "Viennoiserie",
      description: "Filled with almond cream",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <Cake className="w-6 h-6" />,
      name: "Lemon Tart",
      category: "Classic Dessert",
      description: "Tangy citrus perfection",
      color: "from-pink-600 to-rose-600",
    },
    {
      icon: <Cake className="w-6 h-6" />,
      name: "Vanilla Éclair",
      category: "Classic",
      description: "Choux pastry with vanilla cream",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: <Cake className="w-6 h-6" />,
      name: "Custom Wedding Cakes",
      category: "Special Orders",
      description: "Handcrafted for your day",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      name: "Brioche",
      category: "Bread",
      description: "Sweet, tender French bread",
      color: "from-rose-600 to-pink-600",
    },
    {
      icon: <Cake className="w-6 h-6" />,
      name: "Fruit Danish",
      category: "Viennoiserie",
      description: "Seasonal fruits & pastry cream",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      name: "Baguette Tradition",
      category: "Bread",
      description: "Classic French baguette",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: <Cake className="w-6 h-6" />,
      name: "Opera Cake",
      category: "Classic Dessert",
      description: "Layers of coffee & chocolate",
      color: "from-pink-600 to-rose-600",
    },
  ];

  return (
    <section id="menu" className="py-32 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-pink-500/5"></div>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-rose-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-full blur-3xl"></div>

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
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-pink-400 via-rose-300 to-pink-400 bg-clip-text text-transparent">
              Creations
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Fresh artisan pastries and custom creations baked with love every day
          </p>
        </motion.div>

        {/* Menu Grid - Smaller Cards with Complex Animations */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          style={{ perspective: "2000px" }}
        >
          {menuItems.map((item, index) => (
            <MenuCard key={index} item={item} index={index} />
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
            Can't decide? Try our tasting box with a selection of favorites
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="relative group overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative px-8 py-4 rounded-full text-white font-light tracking-wide text-lg border-2 border-pink-400/60 hover:border-pink-300 transition duration-300 bg-transparent">
                Order Online
              </div>
            </button>

            <button className="relative group overflow-hidden">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-pink-500/20 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative backdrop-blur-sm px-8 py-4 rounded-full text-white/90 font-light tracking-wide text-lg border-2 border-pink-400/30 hover:border-pink-400/60 hover:text-white transition duration-300 bg-transparent">
                Custom Orders
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
