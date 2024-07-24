import { atom } from 'recoil';
import { Story } from '@/app/types';
import { LOCAL_STORAGE_KEY } from '@/config/storage';

/**
 * Holds the map of starred stories indexed by the story id.
 */
export const starredStoriesAtom = atom<Record<string, Story>>({
  default: {},
  effects: [
    ({ onSet, setSelf }) => {
      // Load the initial value from local storage
      const savedValue = localStorage.getItem(
        LOCAL_STORAGE_KEY.STARRED_STORIES,
      );
      if (savedValue !== null) {
        setSelf(JSON.parse(savedValue));
      }

      // Subscribe to changes and save them to local storage
      onSet((newValue) => {
        localStorage.setItem(
          LOCAL_STORAGE_KEY.STARRED_STORIES,
          JSON.stringify(newValue),
        );
      });
    },
  ],
  key: LOCAL_STORAGE_KEY.STARRED_STORIES,
});
