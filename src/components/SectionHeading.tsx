export function SectionHeading({
  index,
  title,
  id,
  lede,
  className = "",
}: {
  index: string;
  title: string;
  id: string;
  lede?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted">
        {index}
      </p>
      <h2
        id={id}
        className="mt-3 max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight text-foreground md:text-5xl"
      >
        {title}
      </h2>
      {lede && (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{lede}</p>
      )}
    </div>
  );
}
