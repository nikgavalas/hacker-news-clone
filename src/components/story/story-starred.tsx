import clsx from 'clsx';
import { Story } from '@/app/types';
import { StarFilledIcon, StarUnFilledIcon } from '@/components/icons';
import { useStarredStories } from '@/hooks/use-starred';

interface StoryStarredProps {
  className?: string;
  story: Story;
}

/**
 * @description Button to toggle the story as saved or not.
 */
export function StoryStarred(props: StoryStarredProps) {
  const { className, story } = props;

  const { addStory, removeStory, starredStories } = useStarredStories();

  const isStarred = starredStories[story.id.toString()] !== undefined;

  const handleToggleStory = (story: Story) => {
    if (isStarred) {
      removeStory(story.id.toString());
    } else {
      addStory(story);
    }
  };

  return (
    <div
      className={clsx(
        'flex flex-row gap-1 items-center hover:cursor-pointer',
        className,
      )}
      onClick={() => handleToggleStory(story)}
    >
      {isStarred ? (
        <StarFilledIcon size={14} />
      ) : (
        <StarUnFilledIcon size={14} />
      )}
      {isStarred ? 'saved' : 'save'}
    </div>
  );
}
