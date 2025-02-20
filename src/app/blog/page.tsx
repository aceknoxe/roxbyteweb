import { Suspense } from "react";
import Scene from "@/components/Scene";

export default function Blog() {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </div>
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 text-white">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Blog & News
          </h1>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span>March 15, 2024</span>
                  <span className="mx-2">•</span>
                  <span>Tech Insights</span>
                </div>
                <h2 className="text-2xl font-bold mb-3">The Future of IoT in Industrial Automation</h2>
                <p className="text-gray-300 mb-4">Exploring how IoT technologies are revolutionizing industrial processes and manufacturing efficiency.</p>
                <button className="text-blue-400 hover:text-blue-300 font-semibold">Read More →</button>
              </div>
            </article>

            <article className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-purple-600 to-blue-600"></div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span>March 10, 2024</span>
                  <span className="mx-2">•</span>
                  <span>Company News</span>
                </div>
                <h2 className="text-2xl font-bold mb-3">RoxByte Launches New Smart Home Solution</h2>
                <p className="text-gray-300 mb-4">Introducing our latest smart home automation system with advanced AI capabilities and seamless integration.</p>
                <button className="text-blue-400 hover:text-blue-300 font-semibold">Read More →</button>
              </div>
            </article>

            <article className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span>March 5, 2024</span>
                  <span className="mx-2">•</span>
                  <span>Tech Tutorial</span>
                </div>
                <h2 className="text-2xl font-bold mb-3">Getting Started with Embedded Systems</h2>
                <p className="text-gray-300 mb-4">A comprehensive guide to beginning your journey in embedded systems development.</p>
                <button className="text-blue-400 hover:text-blue-300 font-semibold">Read More →</button>
              </div>
            </article>

            <article className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-purple-600 to-blue-600"></div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span>March 1, 2024</span>
                  <span className="mx-2">•</span>
                  <span>Industry News</span>
                </div>
                <h2 className="text-2xl font-bold mb-3">The Rise of Edge Computing in IoT</h2>
                <p className="text-gray-300 mb-4">How edge computing is transforming IoT applications and improving real-time processing capabilities.</p>
                <button className="text-blue-400 hover:text-blue-300 font-semibold">Read More →</button>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}