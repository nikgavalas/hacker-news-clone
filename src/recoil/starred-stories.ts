// recoil/atoms.js
import { atom } from 'recoil';
import { Story } from '@/app/types';

export const starredStoriesState = atom<Record<string, Story>>({
  // Unique ID (with respect to other atoms/selectors)
  default: {},
  key: 'starredStoriesState', // Default value (aka initial value)
});
