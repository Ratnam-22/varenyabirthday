export const dissolveShader = {
  uniforms: {
    progress: { value: 0.0 },
    edgeColor: { value: [0.83, 0.68, 0.21] },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float progress;
    uniform vec3 edgeColor;
    varying vec2 vUv;
    void main() {
      if (vUv.x < progress) discard;
      gl_FragColor = vec4(1.0);
    }
  `,
};
