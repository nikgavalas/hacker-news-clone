import { atom } from 'recoil';

// Define a Recoil atom for the isStarredSelected state
export const isStarredSelectedState = atom<boolean>({
  // Unique ID (with respect to other atoms/selectors)
  default: false,
  key: 'isStarredSelectedState', // Default value (aka initial value)
});
