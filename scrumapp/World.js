import * as THREE from 'three';

import { createRenderer } from './Components/Systems/renderer.js'
import { createScene } from './Components/scene.js'
import { createCamera } from './Components/camera.js'
import { createScreen } from './Components/screen.js';
import { createWater } from './Components/water.js';
// import { Resizer } from './Components/Systems/Resizer.js';

let scene;
let camera;
let renderer;
let mouse, center;
let water

class World {
	constructor(container) {
		camera = createCamera();
    	scene = createScene();
    	renderer = createRenderer();
    	container.appendChild(renderer.domElement);
    	// const light = createLights();
		water = createWater();
		const screen = createScreen();

    	scene.add(water, screen);

    	// const resizer = new Resizer(container, camera, renderer);

		
		mouse = new THREE.Vector3( 0, 0, 1 );
		center = new THREE.Vector3();
		center.z = -1000;

		video.play();

	}

	onWindowResize() {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
	
		renderer.setSize( window.innerWidth, window.innerHeight );
	
	}

	onDocumentMouseMove( event ) {

		mouse.x = ( event.clientX - window.innerWidth / 2 );
		mouse.y = ( event.clientY - window.innerHeight / 2 );
		
	}

	animate() {
		requestAnimationFrame( animate );
		render();
	}

	render() {
		const time = performance.now() * 0.001;
	
		camera.position.x += ( mouse.x - camera.position.x ) * 0.02;
		camera.position.y += ( -  mouse.y - camera.position.y ) * 0.02;
		camera.lookAt( center );
	
		water.material.uniforms[ 'time' ].value += 1.0 / 60.0;
	
		renderer.render( scene, camera );
	}
}

export { World };
