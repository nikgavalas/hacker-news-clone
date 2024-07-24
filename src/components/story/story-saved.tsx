import clsx from 'clsx';
import { StarFilledIcon, StarUnFilledIcon } from '@/components/icons';

interface StorySavedProps {
  className?: string;
}

/**
 * @description Button to toggle the story as saved or not.
 */
export function StorySaved(props: StorySavedProps) {
  const { className } = props;

  const isSaved = true;

  return (
    <div
      className={clsx(
        'flex flex-row gap-1 items-center hover:cursor-pointer',
        className,
      )}
    >
      {isSaved ? <StarFilledIcon size={14} /> : <StarUnFilledIcon size={14} />}
      {isSaved ? 'saved' : 'save'}
    </div>
  );
}
