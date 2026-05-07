"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ExhibitProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  citation: {
    quote: string;
    author: string;
    year?: string;
  };
  image: string;
  reverse?: boolean; // Toggles layout direction
}

export default function Exhibit({
  id,
  title,
  subtitle,
  description,
  citation,
  image,
  reverse = false,
}: ExhibitProps) {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const slideIn = (direction: "left" | "right") => ({
    hidden: { opacity: 0, x: direction === "left" ? -60 : 60 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    },
  });

  return (
    <section id={id} className="relative min-h-screen w-full bg-[#121212] flex items-center py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center ${reverse ? 'lg:direction-rtl' : ''}`}>
          
          {/* TEXT CONTENT (Col 1-5) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className={`lg:col-span-5 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}
          >
            <div className="flex flex-col space-y-6">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-amber-500/80">
                {subtitle}
              </span>
              
              <h2 className="font-serif text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.1]">
                {title}
              </h2>

              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md">
                {description}
              </p>

              {/* AUTHORITY PRINCIPLE: Historical Citation */}
              <div className="pt-10 mt-6 border-t border-white/10">
                <blockquote className="relative">
                  <p className="text-sm md:text-base italic text-gray-500 font-serif leading-relaxed">
                    &ldquo;{citation.quote}&rdquo;
                  </p>
                  <footer className="mt-4 flex items-center space-x-3">
                    <div className="h-[1px] w-4 bg-amber-500/50" />
                    <cite className="text-[10px] uppercase tracking-[0.2em] text-gray-600 not-italic font-bold">
                      {citation.author} {citation.year ? `— ${citation.year}` : ""}
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </motion.div>

          {/* IMAGE CONTENT (Col 6-12) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideIn(reverse ? "left" : "right")}
            className={`lg:col-span-7 relative group ${reverse ? 'lg:order-1' : 'lg:order-2'}`}
          >
            {/* Museum Display Pedestal Look */}
            <div className="relative aspect-[4/5] md:aspect-[16/10] w-full overflow-hidden rounded-sm bg-neutral-900 border border-white/5 shadow-2xl">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              {/* Subtle technical overlay */}
              <div className="absolute top-4 right-4 text-[9px] font-mono text-white/20 tracking-tighter">
                ARCHIVE_REF::{id}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}