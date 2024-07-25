import { StoryList } from '@/components/story/story-list';

/**
 * Home page component inside the header and footer.
 */
export default function Home() {
  return (
    <section className="mx-6">
      <StoryList />
    </section>
  );
}
