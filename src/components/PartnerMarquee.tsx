import { partners } from "@/data/site";

function Names({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      aria-hidden
      className={`flex items-center gap-x-12 pr-12 ${duplicate ? "marquee-duplicate" : ""}`}
    >
      {partners.map((name) => (
        <li key={name} className="whitespace-nowrap font-serif text-2xl text-faint md:text-3xl">
          {name}
        </li>
      ))}
    </ul>
  );
}

export function PartnerMarquee() {
  return (
    <section aria-label="Selected partners and clients" className="border-y border-edge py-7">
      <p className="sr-only">Worked with {partners.join(", ")}.</p>
      <div className="marquee">
        <div className="marquee-track flex w-max">
          <Names />
          <Names duplicate />
        </div>
      </div>
    </section>
  );
}
