import { StoryList } from '@/components/story/story-list';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <StoryList />
    </section>
  );
}
