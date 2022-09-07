import { Group } from 'three';

import { createGeometries } from './geometries';
import { createMaterials } from './materials';
import {createMeshes } from './meshes';

class Snowman extends Group {
  constructor() {
    super();

    this.meshes = createMeshes();

    this.add(
      this.meshes.bodyBottom,
      this.meshes.bodyTop,
      this.meshes.head,
      this.meshes.leftEye,
      this.meshes.rightEye,
      this.meshes.nose,
    )
  }
}

export { Snowman };