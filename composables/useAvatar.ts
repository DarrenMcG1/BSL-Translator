import { reactive } from 'vue';

interface MixerState {
  handWeight: number;
  bodyWeight: number;
  nmfWeight: number;
}

export const useAvatar = () => {
  const mixer = reactive<MixerState>({ handWeight: 1, bodyWeight: 1, nmfWeight: 1 });

  const loadAvatar = async () => {
    // Placeholder: load GLTF avatar and cache scene
    return Promise.resolve();
  };

  const playAnimation = (clip: string) => {
    // Placeholder: choose animation by clip name
    console.debug('play animation', clip);
  };

  const applySignAnimation = (id: string) => {
    console.debug('apply sign animation', id);
  };

  return { mixer, loadAvatar, playAnimation, applySignAnimation };
};
