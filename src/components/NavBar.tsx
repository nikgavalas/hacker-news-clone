import { Link } from '@nextui-org/link';
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar';
import NextLink from 'next/link';
import { Logo } from '@/components/Logo';
import { ThemeSwitch } from '@/components/theme-switch';

interface NavBarProps {}

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
          <NavbarItem isActive>
            <Link color="primary" href="#">
              latest
            </Link>
          </NavbarItem>
          {' | '}
          <NavbarItem>
            <Link color="foreground" href="#" aria-current="page">
              starred
            </Link>
          </NavbarItem>
        </ul>
      </NavbarContent>

      <NavbarContent justify="start" className="flex sm:hidden">
        <NavbarItem isActive>
          <Link color="primary" href="#">
            latest
          </Link>
        </NavbarItem>
        {' | '}
        <NavbarItem>
          <Link color="foreground" href="#" aria-current="page">
            starred
          </Link>
        </NavbarItem>
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
