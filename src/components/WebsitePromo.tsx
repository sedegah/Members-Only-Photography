"use client";

import Image from "next/image";
import Link from "next/link";

const WebsitePromo = () => {
  return (
    <div className="w-full bg-yellow-50 py-1 border-b">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <span className="text-sm">Create a free website with</span>
        <Image
          src="https://ext.same-assets.com/1974940630/4061061103.svg"
          alt="Website.com"
          width={100}
          height={20}
        />
        <span className="text-sm">website builder.</span>
        <Link
          href="https://www.website.com/website-builder/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 bg-yellow-400 text-sm px-4 py-1 rounded-md hover:bg-yellow-500 transition-colors"
        >
          Start My Website
        </Link>
      </div>
    </div>
  );
};

export default WebsitePromo;
