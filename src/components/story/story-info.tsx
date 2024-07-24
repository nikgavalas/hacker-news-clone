import clsx from 'clsx';

interface StoryInfoProps {
  className?: string;
}

/**
 * @description Shows the info like points, author, and time ago.
 */
export function StoryInfo(props: StoryInfoProps) {
  const { className } = props;

  return (
    <div className={clsx('', className)}>
      <h1>StoryInfo</h1>
    </div>
  );
}
