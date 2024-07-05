// ThreeDScene.js
import React from 'react';
import {Canvas, useLoader} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Glasses from "./GlassesModel.jsx";
import Popcorn from "./Popcorn.jsx";
import {OBJLoader} from "three-stdlib";
import {motion as m} from "framer-motion";


const ThreeDScene = () => {
    const popcornLeft = useLoader(OBJLoader, '/models/Popcorn.obj');
    return (
        <Canvas style={{position: 'absolute', zIndex: '-1', top: 0, left: 0, width: '100%', height: '100%'}}
                className='bg-dark cbr h-100 w-100'>
            <ambientLight intensity={0.8} color={'#0000ff'}/>
            {/* Directional light to cast shadows and add depth */}
            <directionalLight
                intensity={0.5}
                position={[5, 5, 5]}
                color={'#ffffff'}
                castShadow
            />

            {/* Point light for more localized illumination */}
            <pointLight
                intensity={1}
                position={[-5, 5, -5]}
                color={'#ffffff'}
            />
            {/* Additional point light for more coverage */}
            <pointLight
                intensity={0.5}
                position={[5, -5, 5]}
                color={'#ffffff'}
            />
            <Glasses/>
            <primitive
                object={popcornLeft}
                position={[-5,-2,0]}
                scale={0.2}
            />
            <group>
                <Popcorn/>
                <mesh position={[-3, -2, 0]} rotation={[0, 0, 0]} scale={1}>
                    <planeGeometry/>
                    <meshStandardMaterial/>
                </mesh>
            </group>
            <OrbitControls/>
        </Canvas>
    );
};

export default ThreeDScene;
