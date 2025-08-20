import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const container = document.getElementById('cake-container');

if (container) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    let cakeModel;

    loader.load(
        '/models/chocolate_mousse_cake.glb',
        function (gltf) {
            cakeModel = gltf.scene;
            cakeModel.scale.set(1.5, 1.5, 1.5);
            cakeModel.position.y = -1;
            scene.add(cakeModel);
        },
        undefined,
        function (error) {
            console.error('A 3D model error occurred:', error);
        }
    );

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        if (cakeModel) {
            cakeModel.rotation.y += 0.005;
        }
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        if (container.clientWidth > 0 && container.clientHeight > 0) {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        }
    });
}
