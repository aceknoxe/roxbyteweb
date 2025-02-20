import Image from "next/image";
import SceneWrapper from "../components/SceneWrapper";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="absolute inset-0 z-0">
        <SceneWrapper />
      </div>
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Roxbyte
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Transforming Ideas into Digital Reality
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              We are a tech innovation studio specializing in electronics, embedded systems, and cutting-edge software solutions.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all">
                Get Started
              </a>
              <a href="/portfolio" className="border border-blue-600 hover:bg-blue-600/10 text-white font-bold py-3 px-8 rounded-full transition-all">
                View Our Work
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-gray-900/50 backdrop-blur-sm rounded-xl hover:bg-gray-800/50 transition-all group">
              <div className="mb-6">
                <Image src="/window.svg" alt="Electronics" width={48} height={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold mb-4">Electronics Projects</h3>
              <p className="text-gray-300">Custom hardware solutions and innovative electronic designs for your unique needs. From concept to production, we bring your ideas to life.</p>
            </div>
            <div className="p-8 bg-gray-900/50 backdrop-blur-sm rounded-xl hover:bg-gray-800/50 transition-all group">
              <div className="mb-6">
                <Image src="/file.svg" alt="Embedded Systems" width={48} height={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold mb-4">Embedded Systems</h3>
              <p className="text-gray-300">Robust embedded solutions powering smart devices and IoT applications. We create intelligent systems that drive innovation.</p>
            </div>
            <div className="p-8 bg-gray-900/50 backdrop-blur-sm rounded-xl hover:bg-gray-800/50 transition-all group">
              <div className="mb-6">
                <Image src="/globe.svg" alt="Software" width={48} height={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold mb-4">Software Development</h3>
              <p className="text-gray-300">Modern web and mobile applications built with cutting-edge technologies. We deliver scalable solutions that drive business growth.</p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Why Choose Roxbyte?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Expertise</h3>
                <p className="text-gray-300">Deep technical knowledge across multiple domains</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-300">Cutting-edge solutions for modern challenges</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Quality</h3>
                <p className="text-gray-300">Rigorous testing and premium deliverables</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Support</h3>
                <p className="text-gray-300">Dedicated assistance throughout the journey</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
