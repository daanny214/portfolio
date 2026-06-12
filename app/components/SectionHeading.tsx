import Reveal from "./Reveal";

type SectionHeadingProps = {
  index: string;
  tag: string;
  title: string;
  subtitle: string;
};

export default function SectionHeading({
  index,
  tag,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <Reveal className="text-center mb-14 sm:mb-20">
      <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-purple-400 border border-purple-500/25 bg-purple-500/10 rounded-full px-4 py-1.5 mb-5">
        <span className="text-purple-500/70">{index}</span>
        {tag}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
        {title}
      </h2>
      <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
    </Reveal>
  );
}
