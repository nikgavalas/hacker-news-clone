import { atom } from 'recoil';
import { Story } from '@/app/types';

/**
 * Atom to store the map of starred stories.
 */
export const starredStoriesState = atom<Record<string, Story>>({
  default: {},
  key: 'starredStoriesState',
});
