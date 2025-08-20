import '../css/app.css';
import axios from 'axios';
import Noty from 'noty';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import L from 'leaflet';

// --- ADD TO CART LOGIC ---
let addToCart = document.querySelectorAll('.add-to-cart');
let cartCounter = document.querySelector('#cartCounter');

function updateCart(cake) {
    axios.post('/update-cart', cake).then(res => {
        cartCounter.innerText = res.data.totalQty;
        new Noty({
            type: 'success',
            timeout: 1000,
            text: 'Item added to cart',
            progressBar: false,
        }).show();
    }).catch(err => {
        new Noty({
            type: 'error',
            timeout: 1000,
            text: 'Something went wrong',
            progressBar: false,
        }).show();
    });
}

addToCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let cake = JSON.parse(btn.dataset.cake);
        updateCart(cake);
    });
});

// --- 3D CAKE MODEL LOGIC ---
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
            cakeModel.scale.set(70, 70, 70);

            // --- THIS IS THE KEY CHANGE ---
            // We are raising the cake's vertical position from -1.5 to 0.5
            cakeModel.position.set(0, 0, 0); 
            
            cakeModel.rotation.x = 0.4; 
            scene.add(cakeModel);
        }
    );

    // We also adjust the camera's height for a better frame
    camera.position.set(0, 2.9, 7);

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

// --- LEAFLET MAP LOGIC ---
const mapContainer = document.getElementById('map');
if (mapContainer) {
    const mapCoordinates = [28.4089, 77.3178];
    const map = L.map('map').setView(mapCoordinates, 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker(mapCoordinates).addTo(map)
        .bindPopup('<b>Kay\'s Bakery</b><br>Come find us here!')
        .openPopup();
}