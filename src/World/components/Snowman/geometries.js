import { ConeGeometry, SphereGeometry } from 'three';

const createGeometries = () => {
  const snowBall = new SphereGeometry(1, 32, 32);
  const eye = new SphereGeometry(0.1, 8, 8);
  const nose = new ConeGeometry(0.1, 0.5, 16, 16);

  return {
    snowBall,
    eye,
    nose,
  }
}

export { createGeometries };