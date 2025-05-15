"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="bg-black text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src="https://ext.same-assets.com/1974940630/2425167451.png"
                  alt="KIM Logo"
                  width={120}
                  height={60}
                  className="object-contain"
                  crossOrigin="anonymous"
                />
              </div>
              <h3 className="text-xl font-medium mt-2">
                Members Only Photography
              </h3>
            </div>

            <div className="flex flex-col md:items-end gap-4">
              <span>GM 043 8877</span>
              <Link href="tel:+233551307929" className="hover:underline">
                +233551307929
              </Link>
              <Link href="mailto:sedkim370@gmail.com" className="hover:underline">
                sedkim370@gmail.com
              </Link>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-8">
            <p className="text-sm md:text-base">
              Showing our audience the world through the lens of a camera
            </p>
          </div>
        </div>
      </div>

      <div className="bg-pink-light py-4 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            © 2023-2025 Members Only Photography.
