export interface AudioContextType {
  isMuted: boolean;
  volume: number;
  toggleMute: () => void;
  setVolume: (volume: number) => void;
  playTrack: (trackId: string) => void;
  playSound: (soundId: string) => void;
  stopAudio: () => void;
}
