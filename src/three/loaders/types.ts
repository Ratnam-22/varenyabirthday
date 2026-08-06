export type AssetType = 'model' | 'texture' | 'hdr' | 'audio';

export interface AssetTask {
  id: string;
  url: string;
  type: AssetType;
  loaded: boolean;
  error?: Error;
}

export interface LoadingProgress {
  total: number;
  loaded: number;
  percentage: number;
  isLoading: boolean;
}
