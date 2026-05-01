const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// صنع الكائن النبضي الحي
const geometry = new THREE.TorusKnotGeometry(2, 0.6, 150, 20);
const material = new THREE.MeshBasicMaterial({ color: 0x00f2fe, wireframe: true, transparent: true, opacity: 0.3 });
const lifeForm = new THREE.Mesh(geometry, material);
scene.add(lifeForm);

camera.position.z = 7;

function animate() {
  requestAnimationFrame(animate);
  lifeForm.rotation.x += 0.01;
  lifeForm.rotation.y += 0.01;
  // تأثير النبض
  let pulse = 1 + Math.sin(Date.now() * 0.002) * 0.1;
  lifeForm.scale.set(pulse, pulse, pulse);
  renderer.render(scene, camera);
}
animate();
