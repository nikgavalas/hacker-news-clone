import clsx from 'clsx';

interface StoryDomainProps {
  className?: string;
}

/**
 * @description Extracts the domain name from a story and shows it.
 */
export function StoryDomain(props: StoryDomainProps) {
  const { className } = props;

  return (
    <div className={clsx('', className)}>
      <h1>StoryDomain</h1>
    </div>
  );
}
