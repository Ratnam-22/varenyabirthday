export const softEdgeShader = {
  uniforms: {
    softness: { value: 0.2 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float softness;
    varying vec2 vUv;
    void main() {
      float dist = length(vUv - vec2(0.5));
      float alpha = smoothstep(0.5, 0.5 - softness, dist);
      gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
    }
  `,
};
