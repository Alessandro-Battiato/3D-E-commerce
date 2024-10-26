"use client";

import React from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Shoe = () => {
    const shoeModel = useGLTF("./assets/scene.gltf");

    return (
        <Canvas>
            <directionalLight position={[1, 3, 3]} intensity={5} />
            <ambientLight intensity={3} />
            <primitive
                object={shoeModel.scene}
                scale={3}
                rotation={[-(Math.PI / 2), 1, -4.5]}
            />
        </Canvas>
    );
};

export default Shoe;
