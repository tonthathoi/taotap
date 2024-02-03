"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

import imageError from "@/assets/images/no_poster_available.png";

const defaultBlurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

const ImageWithFallback = (props) => {
  const { fallbackSrc, alt, className, ...rest } = props;

  return (
    <Image
      alt={alt}
      unoptimized
      className={twMerge("relative z-[2]", className)}
      blurDataURL={defaultBlurDataURL}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.srcset = fallbackSrc?.src ?? imageError.src;
      }}
      {...rest}
    />
  );
};

export default ImageWithFallback;
