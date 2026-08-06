export const gradientShader = {
  uniforms: {
    colorA: { value: [0.83, 0.68, 0.21] },
    colorB: { value: [0.71, 0.43, 0.47] },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 colorA;
    uniform vec3 colorB;
    varying vec2 vUv;
    void main() {
      gl_FragColor = vec4(mix(colorA, colorB, vUv.y), 1.0);
    }
  `,
};
