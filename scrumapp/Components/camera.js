import * as THREE from 'three';

export function createCamera() {
	const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.set( 0, 0, 500 );
	return camera;
}