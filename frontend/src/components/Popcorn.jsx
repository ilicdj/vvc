// Model.js
import { useRef, Suspense } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { OBJLoader } from 'three-stdlib';

const Popcorn = () => {
    const objRef = useRef();
    const obj = useLoader(OBJLoader, '/models/Popcorn.obj');

    useFrame(() => {
        if (objRef.current) {
            objRef.current.rotation.y += Math.PI / 3 * 0.01; // Adjust the value for more or less subtle rotation
        }
    });

    return <primitive
        // ref={objRef}
        position={[-3,-2,0]}
        object={obj}
        scale={0.2}/>;
};

const PopcornWithErrorBoundary = () => (
    <Suspense fallback={null}>
        <Popcorn />
    </Suspense>
);

export default PopcornWithErrorBoundary;
