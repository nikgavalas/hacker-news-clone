import { useEffect, useState } from 'react';

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

/**
 * Hook that fetches stories from the API. It will also return a function
 * to fetch more stories which can be triggered with a button click or other
 * user interaction.
 */
export default function useStories() {
  const [stories, setStories] = useState<Story[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function fetchStories() {
      const response = await fetch(
        `https://api.hnpwa.com/v0/news/${page}.json`,
      );
      const data = await response.json();
      setStories((s) => [...s, ...data]);
    }

    fetchStories();
  }, [page]);

  return {
    fetchMore: () => setPage(page + 1),
    stories,
  };
}
