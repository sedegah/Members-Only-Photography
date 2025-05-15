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
              <h3 className="text-xl font-medium mt-2">Members Only Photography</h3>
            </div>

            <div className="flex flex-col md:items-end gap-4">
              <div className="flex items-center gap-2">
                <Image
                  src="https://ext.same-assets.com/1974940630/4252861238.svg"
                  alt="Location Icon"
                  width={24}
                  height={24}
                  crossOrigin="anonymous"
                />
                <span>GM 043 8877</span>
              </div>

              <div className="flex items-center gap-2">
                <Image
                  src="https://ext.same-assets.com/1974940630/3301625649.svg"
                  alt="Phone Icon"
                  width={24}
                  height={24}
                  crossOrigin="anonymous"
                />
                <Link href="tel:+233551307929" className="hover:underline">
                  +233551307929
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <Image
                  src="https://ext.same-assets.com/1974940630/2067545548.svg"
                  alt="Email Icon"
                  width={24}
                  height={24}
                  crossOrigin="anonymous"
                />
                <Link href="mailto:sedkim370@gmail.com" className="hover:underline">
                  sedkim370@gmail.com
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-8">
            <p className="text-sm md:text-base">Showing our audience the world through the lens of a camera</p>

            <div className="flex items-center gap-4 mt-4">
              <Link href="https://twitter.com/heiskimathii" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://ext.same-assets.com/1974940630/2320907649.svg"
                  alt="Twitter"
                  width={20}
                  height={20}
                  crossOrigin="anonymous"
                />
              </Link>
              <Link href="https://www.instagram.com/kim.ath.i" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://ext.same-assets.com/1974940630/1998606599.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                  crossOrigin="anonymous"
                />
              </Link>
              <Link href="https://snapchat.com/add/mr.kimathi" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://ext.same-assets.com/1974940630/1367661487.svg"
                  alt="Snapchat"
                  width={20}
                  height={20}
                  crossOrigin="anonymous"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-pink-light py-4 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            © 2023-2025 Members Only Photography. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
