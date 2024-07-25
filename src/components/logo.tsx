import React from 'react';
import { IconSvgProps } from '@/app/types';

/**
 * Logo of the application.
 */
export function Logo({ height, size = 36, width, ...props }: IconSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || width}
      height={size || height}
      viewBox="0 0 100 100"
      {...props}
    >
      <rect width="100" height="100" fill="#FE7139" />
      <text
        x="50%"
        y="50%"
        fontSize="80"
        fontWeight={600}
        textAnchor="middle"
        fill="white"
        dy=".35em"
      >
        Y
      </text>
    </svg>
  );
}
