import { proxy } from 'valtio';

const state = proxy({
  color: '#EFBD48',
  isFullTexture: true,
  fullDecal: './threejs.png',
});

export default state;