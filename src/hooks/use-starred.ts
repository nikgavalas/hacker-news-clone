import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Story } from '@/app/types';
import { starredStoriesState } from '@/recoil/starred-stories'; // Adjust the path as necessary

/**
 * Hook to add and remove stories to/from the list of starred stories.
 */
export function useStarredStories() {
  const [starredStories, setStarredStories] =
    useRecoilState(starredStoriesState);

  useEffect(() => {
    const savedStarredStories = localStorage.getItem('starredStories');
    if (savedStarredStories) {
      setStarredStories(JSON.parse(savedStarredStories));
    }
  }, [setStarredStories]);

  const addStory = useCallback(
    (story: Story) => {
      setStarredStories((prevStories) => {
        const updatedStories = { ...prevStories, [story.id]: story };
        localStorage.setItem('starredStories', JSON.stringify(updatedStories));
        return updatedStories;
      });
    },
    [setStarredStories],
  );

  const removeStory = useCallback(
    (storyId: string) => {
      setStarredStories((prevStories) => {
        const { [storyId]: _, ...updatedStories } = prevStories;
        localStorage.setItem('starredStories', JSON.stringify(updatedStories));
        return updatedStories;
      });
    },
    [setStarredStories],
  );

  return { addStory, removeStory, starredStories };
}
