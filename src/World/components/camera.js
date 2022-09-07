import { PerspectiveCamera } from 'three';

const createCamera = () => {
  const camera = new PerspectiveCamera(
    35, // FOV
    1, // Aspect
    0.1, // Near
    100 // Far
  );

  camera.position.set(5, 5, 10);

  return camera;
}

export { createCamera };