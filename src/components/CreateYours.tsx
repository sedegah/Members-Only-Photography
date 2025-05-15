"use client";

import Image from "next/image";
import Link from "next/link";

const CreateYours = () => {
  return (
    <div className="fixed right-8 top-40 z-40 hidden lg:block">
      <div className="relative border border-gray-200 rounded-md overflow-hidden shadow-md">
        <Link
          href="https://www.website.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-white p-4 hover:opacity-90 transition-opacity"
        >
          <div className="mb-2">
            <Image
              src="https://ext.same-assets.com/1974940630/2838098675.svg"
              alt="Website.com logo"
              width={32}
              height={32}
            />
          </div>
          <div className="text-center text-sm">
            <p className="font-medium">Create</p>
            <p className="text-gray-700">Yours</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CreateYours;
