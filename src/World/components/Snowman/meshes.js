import { MathUtils, Mesh } from 'three';

import { createGeometries } from './geometries';
import { createMaterials } from './materials';

const createMeshes = () => {
  const geometries = createGeometries();
  const materials = createMaterials();

  const bodyBottom = new Mesh(geometries.snowBall, materials.snow);
  bodyBottom.position.set(0, 0, 0);
  bodyBottom.castShadow = true;

  const bodyTop = new Mesh(geometries.snowBall, materials.snow);
  bodyTop.position.set(0, 1.25, 0);
  bodyTop.scale.setScalar(0.75);
  bodyTop.castShadow = true;

  const head = new Mesh(geometries.snowBall, materials.snow);
  head.position.set(0, 2.25, 0);
  head.scale.setScalar(0.5);
  head.castShadow = true;

  const leftEye = new Mesh(geometries.eye, materials.coal);
  leftEye.position.set(-0.15, 2.4, 0.40);

  const rightEye = new Mesh(geometries.eye, materials.coal);
  rightEye.position.set(0.15, 2.4, 0.40);

  const nose = new Mesh(geometries.nose, materials.carrot);
  nose.position.set(0, 2.25, 0.65);
  nose.rotation.x = MathUtils.degToRad(90);
  nose.castShadow = true;

  return {
    bodyBottom,
    bodyTop,
    head,
    leftEye,
    rightEye,
    nose,
  }
}

export { createMeshes };