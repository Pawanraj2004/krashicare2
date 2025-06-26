// 'use client';
// import { ImageBox } from "@/components/image-box";
// import { siteConfig } from "@/config/site";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center px-5 py-24 md:p-24 overflow-x-hidden">
//       <div className="text-center mb-auto mt-8">
//         <h1 className="scroll-m-20 mb-4 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl">
//           <span className="gradient-text">{siteConfig.name}</span> - Plant
//           Disease Detection
//         </h1>
//         <h2 className="scroll-m-20 border-b pb-2 text-xl md:text-2xl font-semibold tracking-tight transition-colors first:mt-0">
//           Helping <span className="gradient-text">Farmers</span> with Machine Learning
//         </h2>
//       </div>
//       <div id="image-box-container" className="mb-auto">
//         <ImageBox />
//       </div>
      
//     </main>
//   );
// }

'use client';
import { ImageBox } from "@/components/image-box";
import { siteConfig } from "@/config/site";
import { useEffect } from "react";
import Head from 'next/head';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 py-24 md:p-24 overflow-x-hidden">
      <Head>
        <title>{siteConfig.name} - Plant Disease Detection</title>
        <meta name="description" content="Helping farmers detect plant diseases with machine learning." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="text-center mb-auto mt-8" id="google_element">
        <h1 className="scroll-m-20 mb-4 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl">
          <span className="gradient-text">{siteConfig.name}</span> - Plant Disease Detection
        </h1>
        <h2 className="scroll-m-20 border-b pb-2 text-xl md:text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Helping <span className="gradient-text">Farmers</span> with Machine Learning
        </h2>
      </div>

      <div id="image-box-container" className="mb-auto">
        <ImageBox />
      </div>
    </main>
  );
}
