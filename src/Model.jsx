import React, { useRef, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";

export default function Model(props) {

  const { camera, scene } = useThree()

  const model = useRef()

  const tl = gsap.timeline()

  useLayoutEffect(() => {

    tl
    .to(camera.position, {
      x: 2.5,
      y: 0.5,
      z: 3,
      scrollTrigger: {
        trigger: ".two",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })
    

  }, [])

  const { nodes, materials } = useGLTF('./019-kitchen.glb');
  const [showOtherDiv, setShowOtherDiv] = useState(false);

  const handleWhiteButtonClick = () => {
    setShowOtherDiv(!showOtherDiv);
  };

  const handleShowOtherDivButtonClick = () => {
    setShowOtherDiv(true);
  };

  return (
    <>
    <group  ref={model} {...props} dispose={null}>
      <mesh geometry={nodes.Plane.geometry} material={materials.Wall} />
      <mesh geometry={nodes.Plane002.geometry} material={materials['Material.001']} position={[-2.394, 0.802, 1.594]} />
      <mesh geometry={nodes.Plane003.geometry} material={materials['Material.002']} position={[-2.394, 0.802, 1.944]} />
      <mesh geometry={nodes.Plane004.geometry} material={materials.Material} position={[-2.281, 0.802, -2.127]} />
      <mesh geometry={nodes.Plane005.geometry} material={materials['Material.003']} position={[-2.281, 0.802, -2.127]} />
      <mesh geometry={nodes.Plane006.geometry} material={materials['Material.001']} position={[-2.394, 0.802, 1.594]} />
      <mesh geometry={nodes.Sphere.geometry} material={materials['Material.004']} position={[-1.101, 2.196, 1.898]} />
      <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[-2.274, 3.087, 2.876]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.007']} position={[-2.274, 2.71, 2.876]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.004']} position={[-2.964, 3.716, 2.876]} />
      <mesh geometry={nodes.Plane007.geometry} material={materials['Material.001']} position={[-2.394, 5.37, 1.594]} scale={[1, 0.658, 1]} />
      <mesh geometry={nodes.Plane008.geometry} material={materials['Material.001']} position={[-2.394, 5.313, 1.594]} scale={[1, 0.658, 1]} />
      <mesh geometry={nodes.Sphere001.geometry} material={materials['Material.004']} position={[-1.837, 6.182, 1.898]} />
      <group position={[1.678, 4.811, -3.455]}>
        <mesh geometry={nodes.Cube004_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube004_2.geometry} material={materials.Window} />
      </group>
      <mesh onClick={handleWhiteButtonClick} geometry={nodes.Cube004.geometry} material={nodes.Cube004.material} position={[5.678, 4.811, -3.455]} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Material.002']} position={[1.678, 4.811, -3.455]} />
      <mesh geometry={nodes.Plane009.geometry} material={materials['Material.002']} position={[2.404, 0.799, 1.834]} />
      <mesh geometry={nodes.Plane010.geometry} material={materials['Material.002']} position={[2.404, 0.799, 1.834]} />
      <mesh geometry={nodes.Plane011.geometry} material={materials['Material.004']} position={[-0.956, 3.646, -1.676]} />
      <mesh geometry={nodes.Circle.geometry} material={materials['Material.005']} position={[2.721, 2.925, 2.948]} scale={0.823}/>
      <mesh onClick={handleWhiteButtonClick} geometry={nodes.Circle001.geometry} material={materials['Material.005']} position={[1.808, 2.925, 1.561]} scale={2} >
      <Html
      as="div"
      zIndexRange={ [100, 0] }
      distanceFactor={5}
      wrapperClass=""
      >
        <div className='white-button'></div>
      </Html>
      </mesh>
      <mesh geometry={nodes.Circle002.geometry} material={materials['Material.003']} position={[2.713, 2.925, 0.738]} scale={0.923} />
    

      <mesh geometry={nodes.Plane001_1.geometry} material={materials.Material} />
      <mesh geometry={nodes.Plane001_2.geometry} material={materials['Material.007']} />
    </group>

    {showOtherDiv && (
        <Html  >
          <div className="other-div">
            <h1 className='inter-white' >Information about</h1>
            <p className='inter-white-small' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            <button onClick={() => setShowOtherDiv(false)}>Hide</button>
          </div>
        </Html>
      )}

    </>
  );
}

useGLTF.preload('./019-kitchen.glb');