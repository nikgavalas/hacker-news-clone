import clsx from 'clsx';

interface StoryCommentsProps {
  className?: string;
}

/**
 * @description Counts and shows the comments of a story.
 */
export function StoryComments(props: StoryCommentsProps) {
  const { className } = props;

  return (
    <div className={clsx('', className)}>
      <h1>StoryComments</h1>
    </div>
  );
}
