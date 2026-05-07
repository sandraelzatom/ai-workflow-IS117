"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  // Animation variants for the staggering effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#121212]">
      {/* Background Image with slow zoom effect */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/hero-bg.jpg"
          alt="The Human Signal Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/20 via-transparent to-[#121212]" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          <motion.span
            variants={textVariants}
            className="mb-4 block text-[10px] font-bold uppercase tracking-[0.6em] text-amber-500 md:text-xs"
          >
            An AI-Orchestrated Archive
          </motion.span>

          <motion.h1
            variants={textVariants}
            className="mb-8 font-serif text-6xl font-bold tracking-tighter text-white md:text-8xl lg:text-9xl"
          >
            THE HUMAN <br />
            <span className="italic">SIGNAL</span>
          </motion.h1>

          <motion.div
            variants={textVariants}
            className="mx-auto h-[1px] w-24 bg-white/20 mb-8"
          />

          <motion.p
            variants={textVariants}
            className="mx-auto max-w-xl text-sm font-light leading-relaxed tracking-wide text-gray-400 md:text-lg"
          >
            Exploring the psychological evolution of communication technology, 
            from the first wired pulse to the integrated digital mind.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-4">
          <span className="text-[9px] uppercase tracking-[0.3em] text-gray-500">Scroll to Enter</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-12 w-[1px] bg-gradient-to-b from-white/40 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}