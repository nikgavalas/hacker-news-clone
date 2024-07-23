import { Logo } from '@/components/Logo';
import { subtitle, title } from '@/components/primitives';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Hacker News&nbsp;</h1>
        <h1 className={title({ color: 'violet' })}>Clone&nbsp;</h1>
        <h2 className={subtitle({ class: 'mt-4' })}>
          Finish the rest of the project!
        </h2>
      </div>

      <Logo size={128} />
    </section>
  );
}
