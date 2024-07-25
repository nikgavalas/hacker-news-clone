import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar';
import NextLink from 'next/link';
import { Logo } from '@/components/logo';
import { NavBarMenuItems } from '@/components/navbar/navbar-menu-items';
import { ThemeSwitch } from '@/components/theme-switch';

interface NavBarProps {}

/**
 * The NavBar component for the application. Pretty basic and just has a logo
 * and some menu to switch between latest and starred stories.
 */
export function NavBar(_props: NavBarProps) {
  return (
    <NextUINavbar maxWidth="xl" position="static">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo size={32} />
            <p className="hidden sm:flex ml-4 font-extrabold text-lg ">
              Hacker News
            </p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden sm:flex gap-2 justify-center ml-8">
          <NavBarMenuItems />
        </ul>
      </NavbarContent>

      <NavbarContent justify="start" className="flex gap-2 sm:hidden">
        <NavBarMenuItems />
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
      </NavbarContent>
    </NextUINavbar>
  );
}
