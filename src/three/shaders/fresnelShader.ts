export const fresnelShader = {
  uniforms: {
    bias: { value: 0.1 },
    power: { value: 2.0 },
    scale: { value: 1.0 },
  },
  vertexShader: `
    varying vec3 vViewPosition;
    varying vec3 vNormal;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: `
    uniform float bias;
    uniform float power;
    uniform float scale;
    varying vec3 vViewPosition;
    varying vec3 vNormal;
    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);
      float fresnel = bias + scale * pow(1.0 + dot(-viewDir, normal), power);
      gl_FragColor = vec4(vec3(fresnel), fresnel);
    }
  `,
};
