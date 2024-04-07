"use client"

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import ComputersCanvas from '../components/Computer'

const page = () => {
  return (
    <div className='h-screen w-screen ' >
      <ComputersCanvas />
    </div>
  )
}

export default page