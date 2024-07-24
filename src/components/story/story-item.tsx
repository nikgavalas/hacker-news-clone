import clsx from 'clsx';
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
        <div className="flex flex-row gap-2 items-center">
          <div className="font-bold font-mono text-lg text-default-foreground">
            {story.title}
          </div>
          <div className="text-default-foreground/50 text-xs">
            ({story.domain})
          </div>
        </div>
        <div className="flex flex-row gap-2 text-default-foreground/50 text-xs">
          <div>{storyInfo}</div>
          <div>|</div>
          <div>{comments_count} comments</div>
          <div>|</div>
          <div>saved</div>
        </div>
      </div>
    </div>
  );
}
