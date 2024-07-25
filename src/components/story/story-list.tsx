'use client';

import { useEffect } from 'react';
import { Button } from '@nextui-org/button';
import clsx from 'clsx';
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

  console.log('isStarredSelected', isStarredSelected);

  useEffect(() => {
    console.log('MenuComponent rendered', isStarredSelected);
  }, [isStarredSelected]);

  const displayedStories = isStarredSelected
    ? Object.values(starredStories)
    : stories;

  console.log('displayedStories', displayedStories);

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
