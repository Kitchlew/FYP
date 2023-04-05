import * as THREE from 'three';

export function createLights(){

    let light = new THREE.DirectionalLight( 'red', 1 );
    light.position.set( 0, 0, 1 );
    light.castShadow = true;
    light.shadow.camera.left = -1;
    light.shadow.camera.right = 1;
    light.shadow.camera.top = 1;
    light.shadow.camera.bottom = -1;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 5;
    light.shadow.bias = -0.001;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    return light;
}