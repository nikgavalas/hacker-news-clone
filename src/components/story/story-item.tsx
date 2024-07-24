import clsx from 'clsx';
import { StorySaved } from '@/components/story/story-saved';
import { Story } from '@/hooks/use-stories';

interface StoryItemProps {
  className?: string;
  index: number;
  story: Story;
}

/**
 * @description Main component for a story.
 */
export function StoryItem(props: StoryItemProps) {
  const { className, index, story } = props;
  const { comments_count, points, time_ago, user } = story;

  const storyInfo = `${points} points by ${user} ${time_ago}`;

  return (
    <div className={clsx('flex flex-row gap-4', className)}>
      <div className="font-mono text-lg text-default-foreground/50">
        {index + 1}.
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
          <div className="font-bold font-mono text-lg text-default-foreground">
            {story.title}
          </div>
          <div className="text-default-foreground/50 text-xs">
            ({story.domain})
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 text-default-foreground/50 text-xs">
          <div>{storyInfo}</div>
          <div className="hidden sm:flex">|</div>
          <div>{comments_count} comments</div>
          <div className="hidden sm:flex">|</div>
          <StorySaved />
        </div>
      </div>
    </div>
  );
}
