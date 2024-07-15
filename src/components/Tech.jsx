import {
  Decal,
  Float,
  // OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { technologies } from "src/constants";
import { SectionWrapper } from "src/hoc";
import { CanvasLoader } from ".";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={2} floatIntensity={4}>
      <mesh castShadow receiveShadow scale={1} position={props.position}>
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

const Tech = () => {
  return (
    <div className="w-full h-[500px] relative">
      <Canvas
        frameloop="always"
        // dpr={[1, 2]}
        camera={{ position: [0, 0, 1], zoom: 40, near: -100, far: 100 }}
        gl={{ preserveDrawingBuffer: true }}
        orthographic
      >
        {/* <LightWithHelper
        position={[lightPosition.x, lightPosition.y, lightPosition.z]}
        intensity={lightIntensity}
      /> */}

        <Suspense fallback={<CanvasLoader />}>
          {/* <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          /> */}
          <ambientLight intensity={2} />
          <directionalLight position={[0, 0, 1]} intensity={2.5} />

          {technologies.map((tech, index) => {
            // Calculate the x position based on the origin (0, 0) and the index.
            // We want:
            // 1. Max 3 per row
            // 2. Centered
            // For example: -1, 0, 1
            const max = 5;
            const x = (index % max) - Math.floor(max / 2); // offset to the left by half of the column count
            const y =
              Math.floor(index / max) -
              Math.floor(technologies.length / max / 2); // offset to the top by half of the row count. rowCount = technologies.length / max

            return (
              <Ball
                imgUrl={tech.icon}
                key={index}
                position={[x * 3, y * 3, 0]}
              />
            );
          })}
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
