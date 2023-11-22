'use client'

import { DoubleSide } from "three"
import Three_D_Text from "./Three_D_Text"

const Experience = ({ text }) => {
    return (
        <>
            <mesh position={[0, 0, -0.1]} >
                <planeGeometry args={[10, 2]} />
                <meshStandardMaterial color="white" side={DoubleSide} />
            </mesh>

            <mesh position={[-4, 0, 0]} >
                <Three_D_Text text={text} />
            </mesh>
        </>
    )
}

export default Experience