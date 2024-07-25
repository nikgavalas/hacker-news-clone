'use client';

import { Link } from '@nextui-org/link';
import clsx from 'clsx';
import { useMenuOptionStarred } from '@/hooks/use-menu-option-starred';

interface FooterProps {
  className?: string;
}

/**
 * Footer for our page. Also allows switching between starred and latest
 * stories.
 */
export function Footer(props: FooterProps) {
  const { className } = props;
  const { isStarredSelected, setStarredSelection } = useMenuOptionStarred();

  return (
    <footer
      className={clsx(
        'w-full flex items-center justify-center py-3',
        className,
      )}
    >
      <div className="w-full mx-10 border-t-2 border-primary pt-4 flex flex-col gap-4 justify-center items-center">
        <p className="font-bold">Hacker News</p>
        <div className="flex flex-row gap-2">
          <Link
            className="flex items-center gap-1 text-current"
            href="#"
            title="Latest"
            onPress={() => setStarredSelection(false)}
          >
            <p
              className={
                isStarredSelected ? 'text-foreground' : 'text-primary text-bold'
              }
            >
              latest
            </p>
          </Link>
          <div>|</div>
          <Link
            className="flex items-center gap-1 text-current"
            href="#"
            title="Latest"
            onPress={() => setStarredSelection(true)}
          >
            <p
              className={
                isStarredSelected ? 'text-primary text-bold' : 'text-foreground'
              }
            >
              starred
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
