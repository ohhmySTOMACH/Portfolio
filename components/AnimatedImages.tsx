"use client";
import Image from "next/image";

export default function AnimatedImages() {
  return (
    <div className="relative ml-16 mr-8 w-full min-w-[960px] min-h-[720px] flex justify-center items-center bg-transparent overflow-hidden">
      {/* Image 1 */}
      <Image
        src="/images/image1.png"
        alt="Image 1"
        className="absolute opacity-0 animate-slideInRight"
        width={550}
        height={412}
        style={{ animationDelay: "0s" }}
      />

      {/* Image 2 */}
      <Image
        src="/images/image2.png"
        alt="Image 2"
        className="absolute opacity-0 animate-slideInTop"
        width={541}
        height={720}
        style={{ animationDelay: "1s" }}
      />

      {/* Image 3 */}
      <Image
        src="/images/image3.png"
        alt="Image 3"
        className="absolute opacity-0 animate-slideInLeft"
        width={800}
        height={600}
        style={{ animationDelay: "2s" }}
      />
    </div>
  );
}
