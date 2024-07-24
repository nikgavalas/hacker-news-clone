import clsx from 'clsx';
import { Story } from '@/hooks/use-stories';

interface StoryItemProps {
  className?: string;
  story: Story;
}

/**
 * @description Main component for a story.
 */
export function StoryItem(props: StoryItemProps) {
  const { className, story } = props;

  return (
    <div className={clsx('', className)}>
      <div>{story.title}</div>
    </div>
  );
}
