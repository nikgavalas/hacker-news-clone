import { Link } from '@nextui-org/link';
import clsx from 'clsx';

interface FooterProps {
  className?: string;
}

/**
 * @description Footer for our page.
 */
export function Footer(props: FooterProps) {
  const { className } = props;

  return (
    <footer
      className={clsx(
        'w-full flex items-center justify-center py-3',
        className,
      )}
    >
      <div className="w-full mx-10 border-t-2 border-primary pt-4 flex flex-col gap-4 justify-center items-center">
        <p className="font-bold">Hacker News</p>
        <div className="flex flex-row">
          <Link
            isExternal
            className="flex items-center gap-1 text-current"
            href="#latest"
            title="Latest"
          >
            <p className="text-primary font-bold">latest</p>
          </Link>
          <div className="mx-2">|</div>
          <Link
            isExternal
            className="flex items-center gap-1 text-current"
            href="#latest"
            title="Latest"
          >
            <p className="text-foreground">starred</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
