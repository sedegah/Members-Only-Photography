"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const highlights = [
  {
    title: "Brand Story Sessions",
    description:
      "Collaborative shoots designed around your brand voice, campaign goals, and audience.",
  },
  {
    title: "Optimized for Digital",
    description:
      "Receive assets that are ready for websites, social channels, and paid campaigns from day one.",
  },
  {
    title: "Reliable Delivery",
    description:
      "Clear timelines, guided planning, and a smooth process from consultation to final gallery.",
  },
];

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 relative">
      
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[700px]">
        <Image
          src="https://ext.same-assets.com/1974940630/3200344728.jpeg"
          alt="Beach scene"
          fill
          className="object-cover"
          priority
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4">
          {/* Force hero text to always be white */}
          <h1 className="text-3xl md:text-5xl font-medium mb-4 md:mb-6 text-white">
            Visuals That Move Your Brand Forward
          </h1>
          <p className="max-w-2xl text-base md:text-lg mb-4 md:mb-8 px-4 text-white">
            Members Only Photography helps small businesses create polished, purposeful imagery that builds trust and drives action.
          </p>
          <p className="max-w-2xl text-base md:text-lg mb-8 md:mb-12 px-4 text-white">
            From planning to delivery, every session is tailored to your goals so your business shows up with clarity and confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services">
              <Button className="bg-white text-black hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 border border-white dark:border-gray-700">
                Explore Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-white text-black hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 border border-white dark:border-gray-700">
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-medium mb-4">
              Welcome to Members Only Photography
            </h2>
            <div className="mb-6">
              <h3 className="text-gray-600 dark:text-gray-300 uppercase text-sm font-semibold tracking-wider mb-4">
                LEARN MORE ABOUT WHAT WE DO
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Founded in June 2023, Members Only Photography was built to make high-quality brand content accessible for growing teams. We blend creative direction with practical marketing insight so your visuals are not only beautiful, but useful.
              </p>
              <Link href="/services">
                <Button className="bg-pink-600 hover:bg-pink-700 text-white w-full sm:w-auto">
                  View Packages
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="https://ext.same-assets.com/1974940630/1771750126.jpeg"
              alt="Beach view"
              fill
              className="object-cover rounded-md"
              crossOrigin="anonymous"
            />
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-center">Why businesses choose us</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((highlight) => (
              <article
                className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6"
                key={highlight.title}
              >
                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">{highlight.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Mode Toggle Button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white shadow-lg hover:scale-105 transition-transform"
        aria-label="Toggle Dark Mode"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </div>
  );
}
