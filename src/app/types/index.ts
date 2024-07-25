import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Story = {
  comments_count: number;
  domain: string;
  id: number;
  points: number | null;
  time: number;
  time_ago: string;
  title: string;
  type: string;
  url: string;
  user: string | null;
};
