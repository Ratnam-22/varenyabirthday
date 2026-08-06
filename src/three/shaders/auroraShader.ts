export const auroraShader = {
  uniforms: {
    time: { value: 0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    varying vec2 vUv;
    void main() {
      vec3 col = 0.5 + 0.5 * cos(time + vUv.xyx + vec3(0, 2, 4));
      gl_FragColor = vec4(col, 0.8);
    }
  `,
};
