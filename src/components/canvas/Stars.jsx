import { Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useMemo, useRef } from "react";

const CustomGeometryParticles = (props) => {
  const { count } = props;

  // This reference gives us direct access to our points
  const points = useRef();

  useFrame((state, delta) => {
    points.current.rotation.x += delta / 10;
    points.current.rotation.y += delta / 15;
  });

  // Create a new Float32Array with the number of points * 3 (x, y, z)
  // -> we are going to generate a random position for 2000 particles
  // -> thus we need 6000 items in our array
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      let x = (Math.random() - 0.5) * 2;
      let y = (Math.random() - 0.5) * 2;
      let z = (Math.random() - 0.5) * 2;

      // We add ti 3 values to the attribute array for every loop
      positions.set([x, y, z], i * 3);
    }

    return positions;
  }, [count]);

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.003}
        color="#5786F5"
        // make your particles smaller
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas
        camera={{
          position: [0, 0, 1],
        }}
      >
        <Suspense fallback={null}>
          <CustomGeometryParticles count={2000} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
