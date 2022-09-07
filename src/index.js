import './style.css';
import { World } from './World/World.js';

const main = () => {
  const container = document.querySelector('#container');

  const world = new World(container);

  world.start();
}

main();