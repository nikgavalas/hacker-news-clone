import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const COMMON_UNITS = ['small', 'medium', 'large'];

/**
 * We need to extend the tailwind merge to include NextUI's custom classes.
 *
 * So we can use classes like `text-small` or `text-default-500` and override them.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'bg-image': ['bg-stripe-gradient'],
      'font-size': [{ text: ['tiny', ...COMMON_UNITS] }],
      shadow: [{ shadow: COMMON_UNITS }],
    },
    theme: {
      borderRadius: COMMON_UNITS,
      borderWidth: COMMON_UNITS,
      opacity: ['disabled'],
      spacing: ['divider'],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
