// Model.js
import { useRef, Suspense } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { OBJLoader } from 'three-stdlib';

const Model = () => {
    const objRef = useRef();
    const obj = useLoader(OBJLoader, '/models/Glasses.obj');

    useFrame(() => {
        if (objRef.current) {
            objRef.current.rotation.y += Math.PI / 3 * 0.01; // Adjust the value for more or less subtle rotation
        }
    });

    return <primitive
        ref={objRef}
        object={obj}/>;
};

const ModelWithErrorBoundary = () => (
    <Suspense fallback={null}>
        <Model />
    </Suspense>
);

export default ModelWithErrorBoundary;
