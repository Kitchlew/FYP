import * as THREE from 'three';
import React from 'react';
import { ReactDOM } from 'react';
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
ReactDOM.render(document.getElementById( 'container_1' ));
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
	scene.background = new THREE.Color( 'white' );
    
	const loader = new FontLoader();
	loader.load('img/Headliner No. 45_Regular.json', function (font) {
        const geometry = new TextGeometry('SCRUM APP', {
            font: font,
          
            width: 100, 
			
            curveSegments: 10,
            bevelEnabled: true,
            bevelOffset: -.2,
            bevelSegments: 2,
            bevelSize: .2,
            bevelThickness: 4,
			fog:true
        });
        const materials = [
            new THREE.MeshBasicMaterial({ color:"#253862" }), // front
            new THREE.MeshBasicMaterial({ color: '#D0CECE' }) // side
        ];
         textMesh1 = new THREE.Mesh(geometry, materials);
        textMesh1.castShadow = true
        

		textMesh1.position.x-=200;
x
q
		
        scene.add(textMesh1)
		
    })
	
	
	
    
	

	window.addEventListener( 'resize', onWindowResize );
	document.addEventListener( 'mousemove', onDocumentMouseMove );
	document.addEventListener('click',playScreen)
	

}
function playScreen(){

	scene.remove(textMesh1);

    textMesh1.geometry.dispose();
	screen = createScreen();
	scene.add( screen );
	scene.background = new THREE.Color( 'white' );
	
	
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
		
		}
		
		
		

	
	camera.lookAt( center );
	


	renderer.render( scene, camera );

}