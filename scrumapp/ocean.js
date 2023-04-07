import * as THREE from 'three';

import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import {GLTFLoader}from 'three/examples/jsm/loaders/GLTFLoader.js';
import { createRenderer } from './Components/Systems/renderer.js';
import { createScene } from './Components/scene.js'
import { createCamera } from './Components/camera.js'
import { createScreen } from './Components/screen.js';
import { createWater } from './Components/water.js';
import { createLights } from './Components/lights.js';
import { createCube } from './Components/cube.js';
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry.js';

let container, stats;
let camera, scene, renderer;
let controls, water, sun, textMesh1,mesh,geometry,cube4,cube5,cube6,screen;
let frame = 0;
let x=0;
let material;
let mouse, center;
init();
animate();

function init() {

	container = document.getElementById( 'container_1' );
	renderer = createRenderer();
	container.appendChild( renderer.domElement );
	
	scene = createScene();
	camera = createCamera();
	
	
	let light = createLights();
	
		 
	
	scene.add(  light );
	
	mouse = new THREE.Vector3( 0, 0, 1 );
	center = new THREE.Vector3();
	center.z = -1000;
	scene.background = new THREE.Color( 0x00000 );
    
	const loader = new FontLoader();
	loader.load('img/Headliner No. 45_Regular.json', function (font) {
        const geometry = new TextGeometry('SCRUM APP', {
            font: font,
            size: 90,
            height: 3,
            curveSegments: 10,
            bevelEnabled: true,
            bevelOffset: -.2,
            bevelSegments: 2,
            bevelSize: .2,
            bevelThickness: 8,
			fog:true
        });
        const materials = [
            new THREE.MeshBasicMaterial({ color:"#5e0000" }), // front
            new THREE.MeshBasicMaterial({ color: '#fc1c3d' }) // side
        ];
         textMesh1 = new THREE.Mesh(geometry, materials);
        textMesh1.castShadow = true
        
        textMesh1.position.x = -150;
		
        scene.add(textMesh1)
		
    })
	
	
	
    
	

	window.addEventListener( 'resize', onWindowResize );
	document.addEventListener( 'mousemove', onDocumentMouseMove );
	document.addEventListener('click',playScreen)
	

}
function playScreen(){
	
	
	
	scene.remove(textMesh1);
	water = createWater();
	screen = createScreen();
	scene.fog = new THREE.FogExp2( 0x5e0000, 0.0005 );
	scene.add( water,screen );
	scene.background = new THREE.Color( 0x5e0000 );
	video.play();
	
    textMesh1.geometry.dispose();
	x=1;
	
    
}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}
function onDocumentMouseMove( event ) {

	mouse.x = ( event.clientX - window.innerWidth/2  );
	mouse.y = ( event.clientY - window.innerHeight/2  );
	
	
}


function animate() {
	requestAnimationFrame( animate );
	render();

}

function render() {

	const time = performance.now() *8000;

	
	if (x===1){
	camera.position.x += ( mouse.x - camera.position.x ) ;
	camera.position.y += ( - mouse.y - camera.position.y ) ;
	water.material.uniforms[ 'time' ].value += 1.0 / 60.0;
	}
	else{textMesh1.scale.z =( Math.cos(frame)/3  );
	
    frame += 0.5;}
	camera.lookAt( center );
	
	
	

	renderer.render( scene, camera );

}