import Image from "next/image";

type HeroVisualProps = {
  src: string;
  alt: string;
  label: string;
  accent?: string;
  chips?: string[];
};

export function HeroVisual({
  src,
  alt,
  label,
  accent,
  chips = [],
}: HeroVisualProps) {
  return (
    <div className="hero-visual reveal float">
      <div className="hero-visual-frame">
        <div className="hero-visual-topbar">
          <span />
          <span />
          <span />
          <p>{label}</p>
        </div>
        <Image src={src} alt={alt} width={1440} height={960} priority />
      </div>
      {chips.length > 0 ? (
        <div className="hero-chip-group">
          {chips.map((chip) => (
            <span className="hero-chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>
      ) : null}
      {accent ? <div className={`hero-orb ${accent}`} /> : null}
    </div>
  );
}
