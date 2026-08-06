export interface AssetManifest {
  models: Record<string, string>;
  textures: Record<string, string>;
  hdr: Record<string, string>;
  audio: Record<string, string>;
}

export const Assets: AssetManifest = {
  models: {},
  textures: {},
  hdr: {},
  audio: {},
};

export const assetManifest = Assets;
