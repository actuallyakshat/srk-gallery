import Image from "next/image";
import { GalleryItems } from "./_constants/GallaryAssets";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen h-full px-6 py-20">
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="text-center font-extrabold tracking-tight text-6xl">Shah Rukh Khan</h1>
        <p className="text-center font-medium text-zinc-200">The Face of Indian Cinema, The Heart of Millions</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 pt-10">
          {
            GalleryItems.map((item, index) => {
              return (
                <div key={index}>
                  {/* <video src={item.videoURL} autoPlay={true} controls ></video> */}
                  <Image src={item.imageURL} alt={item.title} width={500} height={500} quality={100} className={`w-full object-cover aspect-square ${item.imagePositioning}`} />
                </div>
              )
            })
          }
        </div>
      </div>
    </main>
  );
}
