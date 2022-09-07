import { MeshStandardMaterial } from 'three';

const createMaterials = () => {
  const snow = new MeshStandardMaterial({
    color: 'white',
    flatShading: true,
  });

  const coal = new MeshStandardMaterial({
    color: 'black',
    flatShading: true,
  });

  const carrot = new MeshStandardMaterial({
    color: 'orange',
    flatShading: true,
  });

  return { snow, coal, carrot }
}

export { createMaterials };