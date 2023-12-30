<script lang="ts">

import ThreeGlobe from "three-globe";
// @ts-ignore
import { WebGLRenderer, Scene } from "three";
import {
  PerspectiveCamera,
  AmbientLight,
  DirectionalLight,
  Color,
  Fog,
  // AxesHelper,
  // DirectionalLightHelper,
  // CameraHelper,
  PointLight,
  SphereGeometry,
  CircleGeometry,
  BufferGeometry,
  Line,
  LineBasicMaterial,
  CubicBezierCurve3,
  CatmullRomCurve3,
  Vector3,
  EllipseCurve,
// @ts-ignore
} from "three";
// @ts-ignore
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { createGlowMesh } from "three-glow-mesh";
import countries from "$lib/assets/globe-data-min.json";
import { onMount } from "svelte";
	import Galaxy from "./galaxy.svelte";
// @ts-ignore
import { Text } from "troika-three-text";
var renderer: any, camera: any, scene: any, controls: any;
let mouseX = 0;
let mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
var Globe: any;
var parentDiv: HTMLDivElement;
let textElems: Text[] = [];

const canvasWidth = 500;

onMount(() => {
  init();
  initGlobe();
  animate();

  onWindowResize();
  return () => {
    textElems.forEach(text => {
      scene.remove(text);
      text.dispose();
    })
  }
});



// SECTION Initializing core ThreeJS elements
function init() {
  // Initialize renderer
  renderer = new WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.outputEncoding = THREE.sRGBEncoding;
  parentDiv?.appendChild(renderer.domElement);

  // Initialize scene, light
  scene = new Scene();
  scene.add(new AmbientLight(0xbbbbbb, 0.3));
  scene.background = new Color(0x131717);

  // Initialize camera, light
  camera = new PerspectiveCamera();
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  var dLight = new DirectionalLight(0xffffff, 0.8);
  dLight.position.set(-800, 2000, 400);
  camera.add(dLight);

  var dLight1 = new DirectionalLight(0x7982f6, 1);
  dLight1.position.set(-200, 500, 200);
  camera.add(dLight1);

  var dLight2 = new PointLight(0x8566cc, 0.5);
  dLight2.position.set(-200, 500, 200);
  camera.add(dLight2);

  camera.position.z = 400;
  camera.position.x = 0;
  camera.position.y = 20;
  camera.zoom = 0.8;

  scene.add(camera);

  // Additional effects
  scene.fog = new Fog(0x535ef3, 400, 2000);

  // Helpers
  // const axesHelper = new AxesHelper(800);
  // scene.add(axesHelper);
  // var helper = new DirectionalLightHelper(dLight);
  // scene.add(helper);
  // var helperCamera = new CameraHelper(dLight.shadow.camera);
  // scene.add(helperCamera);

  // Initialize controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dynamicDampingFactor = 0.01;
  controls.enablePan = false;
  controls.minDistance = 200;
  controls.maxDistance = 500;
  controls.rotateSpeed = 0.8;
  controls.autoRotate = false;
  controls.enableZoom = false;

  controls.minPolarAngle = Math.PI / 3.5;
  controls.maxPolarAngle = Math.PI - Math.PI / 3;

  window.addEventListener("resize", onWindowResize, false);
  document.addEventListener("mousemove", onMouseMove);
}

function addHalfOrbit(radiusIn: number, tilt: number, isFirst: boolean) {
  const radius = isFirst ? radiusIn : -radiusIn;
  const width23 = radius;
  const curve = new CubicBezierCurve3(
    new Vector3( -radius, -radius / tilt, 0 ),
    new Vector3( -width23, -width23 / (tilt), radius * 2 ),
    new Vector3( width23, width23 / (tilt), radius * 2 ),
    new Vector3( radius, radius / tilt, 0 ),
  );
  const points = curve.getPoints(50);
  const geometry = new BufferGeometry().setFromPoints(points);
  const material = new LineBasicMaterial({ color: 0xffffff });
  const ellipse = new Line(geometry, material);
  scene.add(ellipse);
}

function addOrbit(radius: number, tilt: number, captions: string[], captionOnRight: boolean) {
  addHalfOrbit(radius, tilt, true);
  addHalfOrbit(radius, tilt, false);
  captions.forEach((caption, idx) => {
    const text = new Text();
    scene.add(text);
    text.text = caption;
    text.fontSize = 9;
    //text.position.z = radius;
    text.position.x = (captionOnRight ? radius / 2 : -radius); // radius * 2/4 * (captionOnRight ? 1 : -1);
    text.position.y = radius / tilt - idx * 10;
    text.position.z = radius
    text.color = 0xFFFFFF;
    textElems.push(text);
  })

}

// SECTION Globe
function initGlobe() {
  // Initialize the Globe
  Globe = new ThreeGlobe({
    waitForGlobeReady: true,
    animateIn: true,
  })
    .hexPolygonsData(countries.features)
    .hexPolygonResolution(3)
    .hexPolygonMargin(0.7)
    .showAtmosphere(true)
    .atmosphereColor("#383838")
    .atmosphereAltitude(0.25)
    .hexPolygonColor((e: any) => {
      if (
        ["KGZ", "KOR", "THA", "RUS", "UZB", "IDN", "KAZ", "MYS"].includes(
          e.properties.ISO_A3
        )
      ) {
        return "rgba(255,255,255, 1)";
      } else return "rgba(255,255,255, 0.7)";
    });

  //Globe.rotateY(-Math.PI * (5 / 9));
  //Globe.rotateZ(-Math.PI / 6);
  Globe.rotateX(Math.PI / 15)
  const globeMaterial = Globe.globeMaterial();
  globeMaterial.color = new Color(0x4f4f4f);
  globeMaterial.emissive = new Color(0x383838);
  globeMaterial.emissiveIntensity = 0.1;
  globeMaterial.shininess = 0.7;

  globeMaterial.wireframe = true;

  scene.add(Globe);
  addOrbit(110, -8, ["Internships", "Lockheed Martin", "SIG"], true);
  addOrbit(170, 2, ["Bloomberg LP", "5+ Years"], true);
  addOrbit(180, 8, ["Independent Contractor", "Datamuse", "Cushybots"], false);

}

function onMouseMove(event: MouseEvent) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  windowHalfX = window.innerWidth / 1.5;
  windowHalfY = window.innerHeight / 1.5;
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  camera.lookAt(scene.position);
  camera.zoom = Math.min(1, window.innerWidth / canvasWidth);
  controls.update();
  renderer.render(scene, camera);
  Globe.rotation.y += controls.rotateSpeed * 0.005;
  requestAnimationFrame(animate);
}

</script>

<div bind:this={parentDiv} class=""/>
