import { atom } from 'recoil';
import { LOCAL_STORAGE_KEY } from '@/config/storage';

/**
 * Holds the list of opened articles ids.
 */
export const openedArticleIds = atom<string[]>({
  default: [],
  effects_UNSTABLE: [
    ({ onSet, setSelf }) => {
      // Load the initial value from local storage
      const savedValue = localStorage.getItem(
        LOCAL_STORAGE_KEY.OPENED_ARTICLES,
      );
      if (savedValue !== null) {
        setSelf(JSON.parse(savedValue));
      }

      // Subscribe to changes and save them to local storage
      onSet((newValue) => {
        localStorage.setItem(
          LOCAL_STORAGE_KEY.OPENED_ARTICLES,
          JSON.stringify(newValue),
        );
      });
    },
  ],
  key: LOCAL_STORAGE_KEY.OPENED_ARTICLES,
});
