export const glowShader = {
  uniforms: {
    c: { value: 0.2 },
    p: { value: 1.4 },
    glowColor: { value: [0.83, 0.68, 0.21] },
  },
  vertexShader: `
    varying vec3 vNormal;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float c;
    uniform float p;
    uniform vec3 glowColor;
    varying vec3 vNormal;
    void main() {
      float intensity = pow(c - dot(vNormal, vec3(0.0, 0.0, 1.0)), p);
      gl_FragColor = vec4(glowColor, intensity);
    }
  `,
};
