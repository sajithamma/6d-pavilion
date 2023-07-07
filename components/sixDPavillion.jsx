import React, { useRef, useEffect, useState } from "react";
import { useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


import * as THREE from 'three';


export const SixDPavillion = () => {

    const { camera } = useThree();
    const controls = useRef();
    window.camera = camera;
    window.controls = controls;

    useEffect(() => {

        camera.position.set(40.5, 21.75, -39.3)
        camera.rotation.set(-1.38, 1.48, 1.38)
        controls.current.target.set(9, 20, -40)
        controls.current.update();


    }, [camera])

    const leftscreen = useRef();
    const mainscreen = useRef();
    const rightscreen = useRef();
    const backscreen = useRef();
    const bottomscreen = useRef();
    const topscreen = useRef();

   


    const [video] = useState(() =>

        Object.assign(
            document.createElement('video'),
            {
                src: '/video/reelblue.mp4',
                crossOrigin: 'Anonymous',
                loop: true,
                muted: true
            }
        ),
    );


    useEffect(() => void video.play(), [video])




    return (<>


        <group position={[0, 0.5, 0]} onClick={() => { video.muted = false }}>

            <OrbitControls ref={controls}
            
            enablePan={false}
            //disbale up and down rotation
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}


             />

            <mesh position={[0, 0, -40]} rotation={[Math.PI / 2, 0, 0]} >
                <circleBufferGeometry attach="geometry" args={[100, 128, 128]} />
                <meshBasicMaterial attach="material" color={0x000000} side={THREE.DoubleSide} />
            </mesh>

            <mesh scale={1} rotation={[0, Math.PI, 0]} position={[0, 20, 0]} ref={leftscreen}>
                <planeBufferGeometry attach="geometry" args={[80, 40]} />

                <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>

                    <videoTexture repeat={[0.6, 0.35]} offset={[0.4, 0]} attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
                    <videoTexture attach="emissiveMap" args={[video]} />

                </meshStandardMaterial>

            </mesh>

            <mesh scale={1} position={[-40, 20, -40]} rotation={[0, Math.PI / 2, 0]} ref={mainscreen}>
                <planeBufferGeometry attach="geometry" args={[80, 40]} />

                <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>

                    <videoTexture repeat={[0.39, 0.35]} offset={[0, 0.36]} attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
                    <videoTexture attach="emissiveMap" args={[video]} />

                </meshStandardMaterial>
            </mesh>

            <mesh scale={1} position={[0, 20, -80]} ref={rightscreen}>
                <planeBufferGeometry attach="geometry" args={[80, 40]} />

                <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>

                    <videoTexture repeat={[0.6, 0.35]} offset={[0.41, 0.36]} attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
                    <videoTexture attach="emissiveMap" args={[video]} />

                </meshStandardMaterial>

            </mesh>

            
        <mesh scale={1} position={[40, 20 , -40]} rotation={[0, Math.PI / 2, 0]} ref={backscreen}>
            <planeBufferGeometry attach="geometry" args={[80, 40]} />
            <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>

                    <videoTexture repeat={[0.39, 0.35]} offset={[0, 0]} attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
                    <videoTexture attach="emissiveMap" args={[video]} />

                </meshStandardMaterial>
        </mesh>
         

            <mesh scale={1} position={[0, 0.1, -40]} rotation={[Math.PI / 2, Math.PI, -Math.PI / 2]} ref={bottomscreen}>
                <planeBufferGeometry attach="geometry" args={[80, 80]} />

                <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>

                    <videoTexture repeat={[0.22, 0.3]} offset={[0.77, 0.72]} attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
                    <videoTexture attach="emissiveMap" args={[video]} />

                </meshStandardMaterial>

            </mesh>

            <mesh scale={1} position={[0, 40, -40]} rotation={[-Math.PI / 2, Math.PI, -Math.PI / 2]} ref={topscreen}>
                <planeBufferGeometry attach="geometry" args={[80, 80]} />

                <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>

                    <videoTexture repeat={[0.18, 0.3]} offset={[0, 0.72]} attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
                    <videoTexture attach="emissiveMap" args={[video]} />

                </meshStandardMaterial>

            </mesh>

        </group>



    </>);


}