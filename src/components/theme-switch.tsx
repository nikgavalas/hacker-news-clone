'use client';

import { SwitchProps, useSwitch } from '@nextui-org/switch';
import { useIsSSR } from '@react-aria/ssr';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { MoonFilledIcon, SunFilledIcon } from '@/components/icons';

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps['classNames'];
}

export function ThemeSwitch({
  className,
  classNames,
}: ThemeSwitchProps): JSX.Element {
  const { setTheme, theme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const {
    Component,
    getBaseProps,
    getInputProps,
    getWrapperProps,
    isSelected,
    slots,
  } = useSwitch({
    'aria-label': `Switch to ${theme === 'light' || isSSR ? 'dark' : 'light'} mode`,
    isSelected: theme === 'light' || isSSR,
    onChange,
  });

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          'px-px transition-opacity hover:opacity-80 cursor-pointer',
          className,
          classNames?.base,
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              'w-auto h-auto',
              'bg-transparent',
              'rounded-lg',
              'flex items-center justify-center',
              'group-data-[selected=true]:bg-transparent',
              '!text-default-500',
              'pt-px',
              'px-0',
              'mx-0',
            ],
            classNames?.wrapper,
          ),
        })}
      >
        {!isSelected || isSSR ? (
          <SunFilledIcon size={22} />
        ) : (
          <MoonFilledIcon size={22} />
        )}
      </div>
    </Component>
  );
}
