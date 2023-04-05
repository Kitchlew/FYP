import * as THREE from 'three';

export function createScreen() {
    const texture = new THREE.VideoTexture( video );
	texture.minFilter = THREE.NearestFilter;

	const width = 1920, height = 1080;


	const geometry = new THREE.BoxBufferGeometry( width, height, 1 );
	const material = new THREE.MeshBasicMaterial( { map: texture ,fog:false } );
	const mesh = new THREE.Mesh( geometry, material,);
	mesh.position.set(0,300,-1500)
    return mesh;
}