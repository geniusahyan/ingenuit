"use client"

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-screen ' >
      <Canvas>
        <ambientLight intensity={1} />
        <OrbitControls />
        <mesh>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}

export default page