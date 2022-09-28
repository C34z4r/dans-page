import './style.css'
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document. querySelector('#background')
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

//animate();

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({
  color: 0x5FD8B3
});

const torus = new THREE.Mesh(geometry,material);

const pointLight = new THREE.PointLight(0x50F0BF);
pointLight.position.set(0.5,0.5,0.5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200,50);
scene.add(lightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

scene.add(torus);

animate();

function animate(){
  requestAnimationFrame(animate);

  torus.rotation.x +=0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z +=0.01;

  controls.update();

  renderer.render(scene, camera);
}