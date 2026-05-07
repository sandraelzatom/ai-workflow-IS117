"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/5 pt-24 pb-12 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-bold tracking-tighter text-white">
                THE HUMAN SIGNAL
              </span>
              <span className="text-xs uppercase tracking-[0.4em] text-amber-500/60 mt-2">
                A History of Communication
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm font-light">
              An AI-orchestrated digital archive dedicated to the preservation 
              and study of the psychological evolution triggered by the 
              invisible waves of technology.
            </p>
          </div>

          {/* NAVIGATION COLUMN */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
              The Collection
            </h4>
            <ul className="space-y-4 text-sm text-gray-500 font-light">
              <li>
                <Link href="#01" className="hover:text-amber-500 transition-colors">Exhibit 01: The Telegraph</Link>
              </li>
              <li>
                <Link href="#02" className="hover:text-amber-500 transition-colors">Exhibit 02: The Radio</Link>
              </li>
              <li>
                <Link href="#03" className="hover:text-amber-500 transition-colors">Exhibit 03: The Digital Age</Link>
              </li>
            </ul>
          </div>

          {/* LEGAL/META COLUMN */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
              Archive Metadata
            </h4>
            <div className="space-y-4 text-[11px] font-mono text-gray-600 uppercase tracking-widest leading-relaxed">
              <p>Orchestrated by Gemini AI</p>
              <p>Visual Architecture: Editorial Modernism</p>
              <p>Artifact Status: Digitally Reconstructed</p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex space-x-8 text-[10px] uppercase tracking-widest text-gray-600">
            <span>© {currentYear} The Human Signal</span>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[9px] uppercase tracking-[0.4em] text-amber-500 border border-amber-500/20 px-6 py-3 rounded-full hover:bg-amber-500/5 transition-all"
          >
            Return to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}