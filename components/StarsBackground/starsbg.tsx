"use client"

import { PointMaterial, Points } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';


const StarsBackground = (props: any) => {
  const ref: any = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), {radius: 1.2}));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta/10;
    ref.current.rotation.y -= delta/15;
    })
  return (
    <group rotation={[0,0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial transparent color="#365c99" size={0.002} sizeAttenuation dethWrite={false}/>
      </Points>

    </group>
  )
};

const StarsCanvas = () => (
  <div className='w-full h-auto fixed inset-0 z-[20] ' style={{ pointerEvents: 'none' }}>
    <Canvas camera={{position: [0, 0, 1]}} style={{ pointerEvents: 'none' }}>
      <Suspense fallback={null}>
        <StarsBackground/>
      </Suspense>
    </Canvas>

  </div>
);

export default StarsCanvas;
