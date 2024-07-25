import { atom } from 'recoil';

/**
 * Atom to store the list of read stories.
 */
export const readStoriesState = atom<string[]>({
  default: [],
  key: 'readStoriesState',
});
