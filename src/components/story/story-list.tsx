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
    <div className={clsx('', className)}>
      <div>
        {stories.map((story, index) => (
          <div className="flex flex-row" key={story.id}>
            <div>{index + 1}.</div>
            <StoryItem story={story} />
          </div>
        ))}
      </div>
      <div>
        <Button color="primary" onPress={fetchMore}>
          Fetch More
        </Button>
      </div>
    </div>
  );
}
