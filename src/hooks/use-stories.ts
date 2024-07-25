import { useEffect, useState } from 'react';
import { Story } from '@/app/types';

/**
 * Hook that fetches stories from the API. It will also return a function
 * to fetch more stories which can be triggered with a button click or other
 * user interaction.
 */
export default function useStories() {
  const [stories, setStories] = useState<Story[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchStories() {
      // We will only fetch a max of 11 pages. From trial and error, it seems that
      // the Hacker News api doesn't return anything after page 11.
      const pageToFetch = Math.min(page, 11);

      const response = await fetch(
        `https://api.hnpwa.com/v0/news/${pageToFetch}.json`,
      );
      const data = await response.json();

      setStories((s) => [...s, ...data]);
    }

    fetchStories();
  }, [page]);

  return {
    fetchMore: () => setPage(page + 1),
    hasMore: page < 11,
    stories,
  };
}
