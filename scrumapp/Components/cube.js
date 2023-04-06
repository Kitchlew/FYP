import {
    BoxBufferGeometry,
    MathUtils,
    Mesh,
    MeshStandardMaterial,
    MeshBasicMaterial,
    TextureLoader,
    ShapeGeometry,
    AlphaFormat
  } from 'three';
  
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry.js'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader.js'
function createCube() {
    
	


	
    const geometry = new BoxBufferGeometry(50, 50, 0);
    const material = new MeshBasicMaterial({opacity: 1, transparent: true,depthWrite:false,depthTest:true,fog:false});
    const cube = new Mesh(geometry, material);
    cube.position.set(-400, 0, -100);
  
    const text = createText();
    // cube.rotation.set(-0.5, -0.1, 0.8);

    //cube.add(text)
    return cube;
}

export { createCube };

function createText(){
    const loader = new FontLoader();

    loader.load( './node_modules/three/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {
        const message = '   Three.js\nStroke text.';

		const shapes = font.generateShapes( message, 100 );

		const geometry = new ShapeGeometry( shapes );

		geometry.computeBoundingBox();

					const xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );

					geometry.translate( xMid, 0, 0 );

					// make shape ( N.B. edge view not visible )

					const text = new Mesh( geometry);
					text.position.z = - 150;
					//return( text );

    } );
    
    return loader;
}