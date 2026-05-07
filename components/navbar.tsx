"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // Detect scroll direction to show/hide navbar
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 z-50 flex w-full items-center justify-between px-8 py-6 md:px-16"
    >
      {/* Brand Identity */}
      <Link href="/" className="group flex flex-col">
        <span className="font-serif text-xl font-bold tracking-tighter text-white">
          THE HUMAN SIGNAL
        </span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-amber-500/80 transition-opacity group-hover:opacity-100 md:opacity-0">
          Digital Archive
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-8">
        <ul className="hidden space-x-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 md:flex">
          <li className="transition-colors hover:text-white">
            <Link href="#01">Telegraph</Link>
          </li>
          <li className="transition-colors hover:text-white">
            <Link href="#02">Radio</Link>
          </li>
          <li className="transition-colors hover:text-white">
            <Link href="#03">Digital</Link>
          </li>
        </ul>

        {/* Call to Action / Menu Icon */}
        <button className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white hover:text-black">
          Enter Vault
        </button>
      </div>

      {/* Decorative Progress Bar Line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-white/10"
        style={{
          scaleX: scrollY.get() > 0 ? 1 : 0,
          width: "100%",
          originX: 0,
        }}
      />
    </motion.nav>
  );
}