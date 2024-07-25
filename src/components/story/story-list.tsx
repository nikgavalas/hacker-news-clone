'use client';

import { Button } from '@nextui-org/button';
import clsx from 'clsx';
import { useSearchParams } from 'next/navigation';
import { StoryItem } from '@/components/story/story-item';
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
  const searchParams = useSearchParams();
  const starred = searchParams.get('starred');

  const displayedStories = starred ? Object.values(starredStories) : stories;

  return (
    <div className={clsx('flex flex-col gap-10', className)}>
      <div className="flex flex-col gap-6">
        {displayedStories.map((story, index) => (
          <StoryItem key={story.id} story={story} index={index} />
        ))}
      </div>
      {!starred && (
        <div className="ml-14 mb-8">
          <Button color="primary" radius="none" onPress={fetchMore}>
            Show More
          </Button>
        </div>
      )}
    </div>
  );
}
