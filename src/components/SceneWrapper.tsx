"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

export default function SceneWrapper() {
  return (
    <Suspense fallback={null}>
      <Scene />
    </Suspense>
  );
}