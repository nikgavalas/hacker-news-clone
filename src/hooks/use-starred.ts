import { useCallback, useEffect, useState } from 'react';
import { Story } from '@/app/types';

/**
 * Hook to add and remove stories to/from the list of starred stories.
 */
export function useStarredStories() {
  const [starredStories, setStarredStories] = useState<Record<string, Story>>(
    {},
  );

  useEffect(() => {
    const savedStarredStories = localStorage.getItem('starredStories');
    if (savedStarredStories) {
      setStarredStories(JSON.parse(savedStarredStories));
    }
  }, []);

  const addStory = useCallback((story: Story) => {
    setStarredStories((prevStories) => {
      const updatedStories = { ...prevStories, [story.id]: story };
      localStorage.setItem('starredStories', JSON.stringify(updatedStories));
      return updatedStories;
    });
  }, []);

  const removeStory = useCallback((storyId: string) => {
    setStarredStories((prevStories) => {
      const { [storyId]: _, ...updatedStories } = prevStories;
      localStorage.setItem('starredStories', JSON.stringify(updatedStories));
      return updatedStories;
    });
  }, []);

  return { addStory, removeStory, starredStories };
}
