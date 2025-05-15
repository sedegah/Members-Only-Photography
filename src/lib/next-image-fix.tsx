"use client";

import Image, { type ImageProps } from "next/image";

export function ImageWithCrossOrigin(props: ImageProps) {
  return <Image {...props} crossOrigin="anonymous" />;
}

export default ImageWithCrossOrigin;
