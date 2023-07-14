import React from 'react'
import ReactDOM from 'react-dom/client'
import Customizer from './Customizer';
import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei';
import CameraRig from './CameraRig';

import Shirt from './Shirt';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main>
      <Canvas
        shadows
        camera={{ position: [0, 0, 0], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full max-w-full h-full transition-all ease-in"
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />

        <CameraRig>
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
      </Canvas>
      <Customizer />
    </main>
  </React.StrictMode>,
)
