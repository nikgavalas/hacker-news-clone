import { atom } from 'recoil';

/**
 * Atom to store if we have selected to view the starred stories.
 */
export const isStarredSelectedState = atom<boolean>({
  default: false,
  key: 'isStarredSelectedState',
});
