import { Link } from '@nextui-org/link';
import clsx from 'clsx';
import { Story } from '@/app/types';
import { StoryStarred } from '@/components/story/story-starred';
import { useReadStories } from '@/hooks/use-read-stories';

interface StoryItemProps {
  className?: string;
  index: number;
  story: Story;
}

/**
 * Main component for a story.
 */
export function StoryItem(props: StoryItemProps) {
  const { className, index, story } = props;
  const { comments_count, points, time_ago, user } = story;

  const { addReadStory, readStories } = useReadStories();

  const isRead = readStories.includes(story.id);
  const storyInfo = `${points} points by ${user} ${time_ago}`;

  // Add the story to the list of read stories.
  const handleStoryPress = () => {
    addReadStory(story.id);
  };

  return (
    <div className={clsx('flex flex-row gap-4', className)}>
      <div className="flex-shrink-0 w-8 text-left font-mono text-lg text-default-foreground/50">
        {index + 1}.
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
          <Link
            href={story.url}
            target="_blank"
            rel="noopener noreferrer"
            onPress={handleStoryPress}
          >
            <div
              className={clsx(
                'font-bold font-mono text-lg',
                isRead
                  ? 'text-default-foreground/50'
                  : 'text-default-foreground',
              )}
            >
              {story.title}
            </div>
          </Link>
          <div className="text-default-foreground/50 text-xs">
            ({story.domain})
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 text-default-foreground/50 text-xs">
          <div>{storyInfo}</div>
          <div className="hidden sm:flex">|</div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="text-default-foreground/50 text-xs"
            href={`https://news.ycombinator.com/item?id=${story.id}`}
          >
            <div>{comments_count} comments</div>
          </Link>
          <div className="hidden sm:flex">|</div>
          <StoryStarred story={story} />
        </div>
      </div>
    </div>
  );
}
