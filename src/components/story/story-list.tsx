'use client';

import { Button } from '@nextui-org/button';
import clsx from 'clsx';
import { StoryItem } from '@/components/story/story-item';
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
  return (
    <div className={clsx('flex flex-col gap-10', className)}>
      <div className="flex flex-col gap-6">
        {stories.map((story, index) => (
          <StoryItem key={story.id} story={story} index={index} />
        ))}
      </div>
      <div className="ml-12 mb-8">
        <Button color="primary" radius="none" onPress={fetchMore}>
          show more
        </Button>
      </div>
    </div>
  );
}
