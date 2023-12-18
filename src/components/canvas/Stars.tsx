import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
	Points,
	PointMaterial,
	Preload,
} from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";


const Star = () => {
  const ref = useRef();

  const sphere = random.inSphere(new Float32Array(5001), { radius: 1.2 })

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...{}}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.003}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
	);
};

export const StarsCanvas = () => {
	return (
		<div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas
        camera={{
          position: [0, 0, 1],
        }}
			>
				<Suspense fallback={null}>
					<Star />
				</Suspense>

				<Preload all />
			</Canvas>
		</div>
	);
};
