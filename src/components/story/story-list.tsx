'use client';

import { Button } from '@nextui-org/button';
import clsx from 'clsx';
import { Story } from '@/app/types';
import { StoryItem } from '@/components/story/story-item';
import { useMenuOptionStarred } from '@/hooks/use-menu-option-starred';
import { useStarredStories } from '@/hooks/use-starred';
import useStories from '@/hooks/use-stories';

interface StoryListProps {
  className?: string;
}

/**
 * @description Shows all the stories in addition to a fetch more button.
 */
export function StoryList(props: StoryListProps) {
  const { className } = props;
  const { fetchMore, stories } = useStories();
  const { starredStories } = useStarredStories();
  const { isStarredSelected } = useMenuOptionStarred();

  const displayedStories = isStarredSelected
    ? sortStarredStories(starredStories)
    : stories;

  return (
    <div className={clsx('flex flex-col gap-10', className)}>
      <div className="flex flex-col gap-6">
        {displayedStories.map((story, index) => (
          <StoryItem key={index} story={story} index={index} />
        ))}
      </div>
      {!isStarredSelected && (
        <div className="ml-14 mb-8">
          <Button color="primary" radius="none" onPress={fetchMore}>
            Show More
          </Button>
        </div>
      )}
    </div>
  );
}

/**
 * Sort the starred stories by points and then by time.
 */
function sortStarredStories(stories: Record<string, Story>) {
  // Sort the stories first by points and then if there is a tie, by time.
  // This is so the starred stories show up in the same order as the latest
  // feed.
  return Object.values(stories).sort((a, b) => {
    const aPoints = a.points || 0;
    const bPoints = b.points || 0;

    if (aPoints === bPoints) {
      return b.time - a.time;
    }
    return bPoints - aPoints;
  });
}
