'use client';

import { Link } from '@nextui-org/link';
import { NavbarItem } from '@nextui-org/navbar';
import { useMenuOptionStarred } from '@/hooks/use-menu-option-starred';

interface NavBarMenuItemsProps {}

/**
 * @description The menu items for the NavBar used in both desktop and mobile.
 */
export function NavBarMenuItems(_props: NavBarMenuItemsProps) {
  const { isStarredSelected, setStarredSelection } = useMenuOptionStarred();

  return (
    <>
      <NavbarItem isActive={isStarredSelected ? false : true}>
        <Link
          color={isStarredSelected ? 'foreground' : 'primary'}
          href="#"
          onPress={() => setStarredSelection(false)}
        >
          latest
        </Link>
      </NavbarItem>
      {' | '}
      <NavbarItem isActive={isStarredSelected ? true : false}>
        <Link
          color={isStarredSelected ? 'primary' : 'foreground'}
          href="#"
          aria-current="page"
          onPress={() => setStarredSelection(true)}
        >
          starred
        </Link>
      </NavbarItem>
    </>
  );
}
