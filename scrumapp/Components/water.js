import * as THREE from 'three';
import { Water } from 'three/examples/jsm/objects/Water.js';

export function createWater() {
    const waterGeometry = new THREE.PlaneGeometry( 10000, 10000 );
    let water = new Water(
		waterGeometry,
		{
			textureWidth: 1080,
			textureHeight: 1080,
			waterNormals: new THREE.TextureLoader().load( '../img/Water.jpg', function ( texture ) {
				texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			} ),
			sunDirection: new THREE.Vector3(),
			sunColor: 0xffffff,
			waterColor: 0x001e0f,
			distortionScale: 3.7,
			fog: true
		}
	);
	

	water.rotation.x = - Math.PI / 2;
	water.position.set(0,-500,-0)

    return water;
}
