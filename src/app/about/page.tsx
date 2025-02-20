import { Suspense } from "react";
import Scene from "@/components/Scene";

export default function About() {
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
            About RoxByte
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-12">
            <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-300 mb-6">
                At RoxByte, we&apos;re passionate about pushing the boundaries of technology. Founded with a vision to bridge the gap between innovative ideas and real-world solutions, we specialize in creating cutting-edge electronics, embedded systems, and software solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4">
                  <h3 className="text-xl font-bold mb-3">Mission</h3>
                  <p className="text-gray-300">To deliver innovative technological solutions that empower businesses and enhance user experiences.</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-xl font-bold mb-3">Vision</h3>
                  <p className="text-gray-300">To be the leading force in technological innovation, creating solutions that shape the future.</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-xl font-bold mb-3">Values</h3>
                  <p className="text-gray-300">Innovation, Excellence, Integrity, and Customer Success drive everything we do.</p>
                </div>
              </div>
            </section>

            <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-3">Expert Team</h3>
                  <p className="text-gray-300">Our team consists of experienced professionals with deep expertise in electronics, embedded systems, and software development.</p>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-3">Custom Solutions</h3>
                  <p className="text-gray-300">We create tailored solutions that perfectly match your specific requirements and business goals.</p>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-3">Innovation First</h3>
                  <p className="text-gray-300">We stay ahead of the curve by continuously adopting and implementing the latest technologies.</p>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
                  <p className="text-gray-300">Our rigorous testing and quality control processes ensure reliable and robust solutions.</p>
                </div>
              </div>
            </section>

            <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="text-gray-300">Chief Technology Officer</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <h3 className="text-xl font-bold">Jane Smith</h3>
                  <p className="text-gray-300">Lead Electronics Engineer</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <h3 className="text-xl font-bold">Mike Johnson</h3>
                  <p className="text-gray-300">Software Development Lead</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}