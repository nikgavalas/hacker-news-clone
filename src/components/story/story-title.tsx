import clsx from 'clsx';

interface StoryTitleProps {
  className?: string;
}

/**
 * @description Shows the title of the story.
 */
export function StoryTitle(props: StoryTitleProps) {
  const { className } = props;

  return (
    <div className={clsx('', className)}>
      <h1>StoryTitle</h1>
    </div>
  );
}
