import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

class World {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.handleCanvas();
    this.handleCamera();
    this.handleHelper();

    this.handleAnimate();
  }

  handleCanvas() {
    // todo: set canvas size
    this.renderer.setSize(window.innerWidth, window.innerWidth);
    // todo: set canvas background
    this.renderer.setClearColor(0xfefefe);
    // todo: append canvas body
    document.body.appendChild(this.renderer.domElement);
  }

  handleCamera() {
    this.camera.position.set(6, 8, 14);
    this.controls.update();
  }

  handleHelper() {
    // todo: a 12 by 12 gird helper
    const gridHelper = new THREE.GridHelper(12, 12);
    // todo: the x, y, and z axes with each having a length of 4
    const axesHelper = new THREE.AxesHelper(4);
    // todo: add helper to scene
    this.scene.add(gridHelper);
    this.scene.add(axesHelper);
  }

  handleAnimate() {
    requestAnimationFrame(() => this.handleAnimate());
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}

export default World;
