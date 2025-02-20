"use client";

import { Suspense } from "react";
import Scene from "@/components/Scene";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

export default function Projects() {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Scene />
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </Suspense>
      </div>
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 text-white">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Our Projects
          </h1>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">Smart Home Automation System</h2>
                <p className="text-gray-300 mb-4">A comprehensive IoT solution for home automation, featuring custom PCB design, embedded firmware, and mobile app control.</p>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-blue-400">Technologies Used:</h3>
                  <ul className="text-gray-300 list-disc list-inside">
                    <li>ESP32 Microcontroller</li>
                    <li>Custom PCB Design</li>
                    <li>MQTT Protocol</li>
                    <li>React Native Mobile App</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="h-48 bg-gradient-to-r from-purple-600 to-blue-600"></div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">Industrial Automation Controller</h2>
                <p className="text-gray-300 mb-4">A robust industrial control system with real-time monitoring and advanced process control capabilities.</p>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-blue-400">Technologies Used:</h3>
                  <ul className="text-gray-300 list-disc list-inside">
                    <li>STM32 Platform</li>
                    <li>FreeRTOS</li>
                    <li>Modbus Protocol</li>
                    <li>Custom HMI Interface</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">E-Commerce Platform</h2>
                <p className="text-gray-300 mb-4">A full-featured online marketplace with real-time inventory management and secure payment processing.</p>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-blue-400">Technologies Used:</h3>
                  <ul className="text-gray-300 list-disc list-inside">
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>Stripe Integration</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="h-48 bg-gradient-to-r from-purple-600 to-blue-600"></div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">Environmental Monitoring System</h2>
                <p className="text-gray-300 mb-4">A wireless sensor network for environmental monitoring with cloud-based data analytics.</p>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-blue-400">Technologies Used:</h3>
                  <ul className="text-gray-300 list-disc list-inside">
                    <li>LoRaWAN</li>
                    <li>Custom Sensor Design</li>
                    <li>AWS IoT Core</li>
                    <li>Python Data Analytics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}