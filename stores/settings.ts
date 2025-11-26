import { defineStore } from 'pinia';

type CameraMode = 'orbit' | 'static';

export const useSettingsStore = defineStore('settings', () => {
  const avatarSpeed = ref(1);
  const camera = ref<CameraMode>('orbit');
  const showNonManuals = ref(true);
  const transitionBlend = ref(0.35);

  return { avatarSpeed, camera, showNonManuals, transitionBlend };
});
