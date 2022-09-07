import { 
  Color, 
  Scene,
  Mesh,
  Fog,
  MeshLambertMaterial,
  PlaneGeometry,
} from 'three';

const createScene = () => {
  const scene = new Scene();

  scene.background = new Color().setHSL( 0.6, 1, 0.7 );
  //scene.fog = new Fog(scene.background, 1000, 3000);

  const groundGeometry = new PlaneGeometry( 10, 10 );
  const groundMaterial = new MeshLambertMaterial({ color: 0xffffff });

  const ground = new Mesh(groundGeometry, groundMaterial);
  ground.position.y = -0.5;
  ground.rotation.x = - Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  return scene;
}

export { createScene };