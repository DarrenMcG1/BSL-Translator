export interface PoseResult {
  hands: number[];
  pose: number[];
  face: number[];
}

type Callback = (result: PoseResult) => void;

export const useMediaPipe = () => {
  let callback: Callback | null = null;

  const start = async (video: HTMLVideoElement, canvas: HTMLCanvasElement, onResults: Callback) => {
    callback = onResults;
    // Placeholder: start MediaPipe holistic pipeline
    console.debug('start mediapipe', video, canvas);
    return Promise.resolve();
  };

  const stop = async () => {
    console.debug('stop mediapipe');
    callback = null;
  };

  return { start, stop };
};
