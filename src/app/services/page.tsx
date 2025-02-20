import { Suspense } from "react";
import Scene from "@/components/Scene";

export default function Services() {
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
            Our Services
          </h1>

          <div className="max-w-6xl mx-auto space-y-12">
            <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6">Electronics Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-blue-400">Custom Hardware Design</h3>
                  <p className="text-gray-300">Tailored electronic solutions designed to meet your specific requirements, from concept to production.</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Circuit design and simulation</li>
                    <li>PCB layout and fabrication</li>
                    <li>Prototype development</li>
                    <li>Component selection and sourcing</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-blue-400">IoT Solutions</h3>
                  <p className="text-gray-300">Connected device solutions that bring your ideas into the Internet of Things ecosystem.</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Wireless sensor networks</li>
                    <li>Remote monitoring systems</li>
                    <li>Smart home automation</li>
                    <li>Industrial IoT applications</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6">Embedded Systems</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-blue-400">Firmware Development</h3>
                  <p className="text-gray-300">Custom firmware solutions for microcontrollers and embedded processors.</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Real-time operating systems (RTOS)</li>
                    <li>Device drivers development</li>
                    <li>Bootloader implementation</li>
                    <li>Performance optimization</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-blue-400">Automation Systems</h3>
                  <p className="text-gray-300">Industrial and commercial automation solutions for improved efficiency.</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>PLC programming</li>
                    <li>SCADA systems</li>
                    <li>Motion control</li>
                    <li>Process automation</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6">Software Development</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-blue-400">Web Applications</h3>
                  <p className="text-gray-300">Modern web solutions built with cutting-edge technologies.</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Custom web applications</li>
                    <li>E-commerce platforms</li>
                    <li>Progressive Web Apps (PWA)</li>
                    <li>API development and integration</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-blue-400">Mobile Applications</h3>
                  <p className="text-gray-300">Native and cross-platform mobile app development.</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>iOS app development</li>
                    <li>Android app development</li>
                    <li>Cross-platform solutions</li>
                    <li>Mobile app maintenance</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}