import * as React from 'react';
import { IconSvgProps } from '@/app/types';

export function MoonFilledIcon({
  height,
  size = 24,
  width,
  ...props
}: IconSvgProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SunFilledIcon({
  height,
  size = 24,
  width,
  ...props
}: IconSvgProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <g fill="currentColor">
        <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
        <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
      </g>
    </svg>
  );
}

export function StarFilledIcon({
  height,
  size = 24,
  width,
  ...props
}: IconSvgProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 10 10"
      width={size || width}
      {...props}
    >
      <path
        d="M5 0L6.32252 3.17971L9.75528 3.45492L7.13988 5.69529L7.93893 9.04508L5 7.25L2.06107 9.04508L2.86012 5.69529L0.244718 3.45492L3.67748 3.17971L5 0Z"
        fill="#FE7139"
      />
    </svg>
  );
}

export function StarUnFilledIcon({
  height,
  size = 24,
  width,
  ...props
}: IconSvgProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 10 10"
      width={size || width}
      {...props}
    >
      <path
        d="M5 1.30198L5.86086 3.37173L5.97814 3.65371L6.28256 3.67811L8.51703 3.85725L6.8146 5.31556L6.58266 5.51424L6.65352 5.8113L7.17364 7.99176L5.26063 6.8233L5 6.66411L4.73937 6.8233L2.82636 7.99176L3.34648 5.8113L3.41734 5.51424L3.1854 5.31556L1.48297 3.85725L3.71744 3.67811L4.02186 3.65371L4.13914 3.37173L5 1.30198Z"
        stroke="white"
        strokeOpacity="0.5"
      />
    </svg>
  );
}
