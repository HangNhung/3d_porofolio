import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import {
  Canvas,
  //useFrame
} from "@react-three/fiber";
import React, {
  Suspense,
  // useEffect, useRef
} from "react";
import { CanvasLoader } from "..";
// import { useControls } from "leva";
// import { DirectionalLightHelper } from "three";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={2} floatIntensity={4}>
      <ambientLight intensity={1.9} />
      <directionalLight position={[0, 0, 0.1]} intensity={2.5} />

      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="white"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[Math.PI * 2, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

// const LightWithHelper = ({ position, intensity }) => {
//   const lightRef = useRef();
//   const helperRef = useRef();

//   useEffect(() => {
//     if (lightRef.current) {
//       helperRef.current = new DirectionalLightHelper(
//         lightRef.current,
//         100,
//         "yellow",
//       );
//       lightRef.current.add(helperRef.current);
//     }
//   }, []);

//   useFrame(() => {
//     if (helperRef.current) {
//       helperRef.current.update();
//     }
//   });

//   return (
//     <directionalLight
//       ref={lightRef}
//       position={position}
//       intensity={intensity}
//     />
//   );
// };

const BallCanvas = ({ icon }) => {
  // const { radius, detail, lightIntensity, lightPosition } = useControls({
  //   radius: { value: 1, min: 0.1, max: 5, step: 0.1 },
  //   detail: { value: 0, min: 0, max: 5, step: 1 },
  //   lightIntensity: { value: 1.5, min: 0, max: 10, step: 0.1 },
  //   lightPosition: {
  //     value: { x: 0, y: 0, z: 0.5 },
  //     x: { min: -50, max: 50 },
  //     y: { min: -50, max: 50 },
  //     z: { min: -50, max: 50 },
  //   },
  // });

  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* <LightWithHelper
        position={[lightPosition.x, lightPosition.y, lightPosition.z]}
        intensity={lightIntensity}
      /> */}

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
