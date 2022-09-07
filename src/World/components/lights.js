import { 
  DirectionalLight,
  AmbientLight,
  HemisphereLight,
} from 'three';

const createLights = () => {
  const ambientLight = new HemisphereLight(0xffffff, 0xffffff, 3);
  ambientLight.color.setHSL(0.6, 1, 0.8);
  ambientLight.position.set( 0, 0, 0 );

  const mainLight = new DirectionalLight(0xaabbff, 3);
  mainLight.position.set(50, 50, 50);
  mainLight.castShadow = true;


  return { mainLight, ambientLight };
}

export { createLights };