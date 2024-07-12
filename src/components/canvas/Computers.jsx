import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useHelper } from "@react-three/drei";
import { CanvasLoader } from "src/components";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  // Add SpotLightHelper to the scene
  // const spotLight = useRef(computer.scene);
  // useHelper(spotLight, SpotLightHelper, "yellow");

  const { viewport, size } = useThree();
  const ref = useRef();

  return (
    <mesh ref={ref}>
      <hemisphereLight intensity={0.9} groundColor="black" />
      <pointLight color="white" intensity={1.5} position={[-3, 0.5, 0]} />
      <directionalLight
        color={0x00ff}
        intensity={0.9}
        position={[1, 0.25, 0]}
      />
      <spotLight
        // ref={spotLight}
        position={[0, 4, 0]}
        angle={Math.PI / 3}
        penumdra={0.1}
        intensity={300}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={computer.scene}
        position={[isMobile ? 1 : 0, isMobile ? -2 : -3, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={isMobile ? 0.5 : 0.8}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  // fov: field of view
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 10], fov: 75 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
      {/* <axesHelper size={100} /> */}
    </Canvas>
  );
};

export default ComputersCanvas;
