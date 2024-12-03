"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AnimatedImages from "@/components/AnimatedImages";
import "@/style/index.css";
import SocialMediaBar from "@/components/SocialMediaBar";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row w-full h-full items-center justify-items-center p-8 space-x-4">
        <main className="w-full h-full flex flex-col gap-8">
          <div className="pl-12">
            <h1 className="logo text-5xl italic">Carmen</h1>
          </div>
          <div className="w-full h-full flex flex-row justify-center items-end">
            <SocialMediaBar />
            <div className="max-w-full h-full">
              <AnimatedImages />
            </div>
          </div>
        </main>
        <Header />
      </div>
      <Footer />
    </div>
  );
}
