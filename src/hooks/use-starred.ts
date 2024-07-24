import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { Story } from '@/app/types';
import { starredStoriesAtom } from '@/recoil/starred-stories';

/**
 * Hook to add and remove stories to/from the list of starred stories.
 */
export function useStarredStories() {
  const [starredStories, setStarredStories] =
    useRecoilState(starredStoriesAtom);

  const addStory = useCallback(
    (story: Story) => {
      setStarredStories((prevStories) => ({
        ...prevStories,
        [story.id]: story,
      }));
    },
    [setStarredStories],
  );

  const removeStory = useCallback(
    (storyId: string) => {
      setStarredStories((prevStories) => {
        const { [storyId]: _, ...updatedStories } = prevStories;
        return updatedStories;
      });
    },
    [setStarredStories],
  );

  return { addStory, removeStory, starredStories };
}
