'use client'

import './hero_canvas.scss'
import { AnimatePresence, motion as m } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Experience from './Experience'
import Text_Input from './Text_Input'
import { useState } from 'react'

const Hero_Canvas = () => {
    const [textInput, setTextInput] = useState('')

    return (
        <AnimatePresence>
            <m.div
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {delay: 1, duration: 2}}}
                exit={{opacity: 0, transition: {duration: 1}}}
                className='hero_canvas'
            >
                <Text_Input onInputChange={setTextInput} />

                <Canvas shadows >
                    <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={40} />

                    <ambientLight intensity={0.5} />

                    <Experience text={textInput} />

                    <OrbitControls
                    // autoRotate
                    autoRotateSpeed={-1}
                    // reverseHorizontalOrbit
                    rotateSpeed={1}
                    enablePan={false}
                    // enableZoom={false}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                    minDistance={5}
                    maxDistance={15}
                    enableDamping={true}
                    dampingFactor={0.05}
                />
                </Canvas>
            </m.div>
        </AnimatePresence>
    )
}

export default Hero_Canvas