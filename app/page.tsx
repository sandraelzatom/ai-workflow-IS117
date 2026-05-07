"use client";

import Hero from "@/components/Hero";
import Exhibit from "@/components/Exhibit";

// The Exhibit Data: Centralizing the narrative and "Authority" citations
const EXHIBITS_DATA = [
  {
    id: "01",
    subtitle: "The Wired Pulse",
    title: "THE TELEGRAPH",
    description: "The moment communication was decoupled from the physical body. A revolution of copper and gutta-percha that birthed the 'Global Present' and the first inklings of modern urgency.",
    image: "/01-telegraph.jpg",
    citation: {
      quote: "The surface of the earth will be skirted with nerve-like wires, and the consciousness of man will be diffused through the whole world.",
      author: "Nathaniel Hawthorne",
      year: "1851"
    }
  },
  {
    id: "02",
    subtitle: "The Ethereal Voice",
    title: "THE RADIO",
    description: "The dissolution of presence. By severing sound from its source, the radio created a collective national consciousness—an intimacy with a ghost that reached millions in solitude.",
    image: "/02-radio.jpg",
    citation: {
      quote: "The coming of the wireless era will make the whole world a single neighborhood.",
      author: "Guglielmo Marconi",
      year: "1912"
    }
  },
  {
    id: "03",
    subtitle: "The Integrated Mind",
    title: "THE DIGITAL AGE",
    description: "The climax of the signal. In an age of recursive algorithms and externalized cognition, the boundary between human thought and machine logic begins to fundamentally blur.",
    image: "/03-digital.jpg",
    citation: {
      quote: "We are as gods and might as well get good at it. We are beginning to discover that the only way to play is with the whole system.",
      author: "Stewart Brand",
      year: "1968"
    }
  }
];

export default function Home() {
  return (
    <main className="bg-[#121212] selection:bg-amber-500 selection:text-black">
      {/* 1. THE ENTRY: High-impact hero section */}
      <Hero />

      {/* 2. THE GALLERY: Mapping through the chronological exhibits */}
      <div className="flex flex-col">
        {EXHIBITS_DATA.map((exhibit, index) => (
          <Exhibit 
            key={exhibit.id}
            id={exhibit.id}
            subtitle={exhibit.subtitle}
            title={exhibit.title}
            description={exhibit.description}
            image={exhibit.image}
            citation={exhibit.citation}
            // Logic: Reverse the layout for every even-numbered item (index 1, 3, etc.)
            // This creates the professional 'Z-pattern' scan for the reader.
            reverse={index % 2 !== 0}
          />
        ))}
      </div>

      {/* 3. TRANSITION SPACE: Optional subtle spacer before the footer */}
      <div className="h-32 bg-gradient-to-b from-[#121212] to-[#0a0a0a]" />
    </main>
  );
}