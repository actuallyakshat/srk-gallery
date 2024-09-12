'use client'
import Image from "next/image";
import { GalleryItems } from "./_constants/GallaryAssets";
import React from "react";

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentVideoURL, setCurrentVideoURL] = React.useState<string | null>(null);

  return (
    <main className="bg-zinc-950 text-white min-h-screen h-full px-6 py-20">
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="text-center font-extrabold tracking-tight text-4xl md:text-5xl lg:text-7xl">Shah Rukh Khan</h1>
        <p className="text-center font-medium text-zinc-200 font-serif text-lg">The Face of Indian Cinema, The Heart of Millions &#10084;</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 pt-10">
          {
            GalleryItems.map((item, index) => (
              <div key={index} onClick={() => {
                setIsOpen(true);
                setCurrentVideoURL(item.videoURL);
              }} className="cursor-pointer">
                <Image src={item.imageURL} alt={item.title} width={500} height={500} quality={100} className={`w-full object-cover aspect-square ${item.imagePositioning}`} />
              </div>
            ))
          }
        </div>
        {isOpen && currentVideoURL && (
          <VideoModal isOpen={isOpen} videoURL={currentVideoURL} setIsOpen={setIsOpen} />
        )}
      </div>
    </main>
  );
}

export function VideoModal({ isOpen, setIsOpen, videoURL }: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  videoURL: string;
}) {

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative z-[51] max-w-[90%] w-fit max-h-[90%] h-fit md:h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          src={videoURL}
          autoPlay

          className="w-full h-full object-contain max-w-full max-h-full"
        />
      </div>
    </div>
  );
}
