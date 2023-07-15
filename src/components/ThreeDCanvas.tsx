import { PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

type ModelProps = {
  scale: number;
  model: string;
  position?: number[];
};

function Model({ scale, model }: ModelProps) {
  const { scene } = useGLTF(model);

  useFrame(({ clock }) => {
    scene.rotation.y = clock.getElapsedTime() * 1; // Adjust the rotation speed here
  });

  return <primitive object={scene} scale={scale} />;
}

type ThreeDModelProps = {
  models: string[];
};

export const ThreeDCanvas = ({ models }: ThreeDModelProps) => {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ fov: 45 }}
      onCreated={(state) => state.gl.setClearColor("green", 0)}
      style={{ height: "6.5rem" }}
    >
      <PresentationControls
        speed={0.4}
        global
        zoom={1}
        polar={[-0.1, Math.PI / 4]}
      >
        <Stage environment="sunset">
          {models.map((model, idx) => (
            <Model
              key={idx}
              scale={1}
              model={model}
              position={[-2 + idx * 2, 0, 0]} // Adjust the position of each model
            />
          ))}
        </Stage>
      </PresentationControls>
    </Canvas>
  );
};
