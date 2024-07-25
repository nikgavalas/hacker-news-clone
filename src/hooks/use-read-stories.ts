import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { LOCAL_STORAGE_KEY } from '@/config/storage';
import { readStoriesState } from '@/recoil/read-stories';

/**
 * Hook to add story IDs to the list of read stories.
 */
export function useReadStories() {
  const [readStories, setReadStories] = useRecoilState(readStoriesState);

  useEffect(() => {
    const savedReadStories = localStorage.getItem(
      LOCAL_STORAGE_KEY.READ_STORIES,
    );

    if (savedReadStories) {
      setReadStories(JSON.parse(savedReadStories));
    }
  }, [setReadStories]);

  const addReadStory = useCallback(
    (storyId: number) => {
      setReadStories((prevReadStories) => {
        const updatedReadStories = [...prevReadStories, storyId];

        localStorage.setItem(
          LOCAL_STORAGE_KEY.READ_STORIES,
          JSON.stringify(updatedReadStories),
        );

        return updatedReadStories;
      });
    },
    [setReadStories],
  );

  return { addReadStory, readStories };
}
