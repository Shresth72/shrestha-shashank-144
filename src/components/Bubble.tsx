"use client";

import { FC } from "react";
import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";
import { MeshPhysicalMaterial } from 'three';


const Bubble = (props: ThreeElements['mesh']) => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    // Rotate the bubble
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref} {...props}>
      <sphereBufferGeometry args={[3, 32, 32]} />
      <meshPhysicalMaterial
        transparent
        roughness={0.1}
        clearcoat={1}
        clearcoatRoughness={0.1}
        envMapIntensity={1}
        metalness={1}
        transmission={0.9}
        opacity={0.5}
        // refractionRatio={0.98}
        
      />
    </mesh>
  );
  
};


const BubbleCanvas = () => {
    return (
        <Canvas  className={`absolute left-0 top-20 z-20 translate-y-[-300px] translate-x-[-200px]`}  style={{ height: '60vh', width: '60vw' }} >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Bubble />
      </Canvas>
    )
}

export default BubbleCanvas;
