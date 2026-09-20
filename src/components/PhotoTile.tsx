import Image from "next/image";

export default function PhotoTile({
  image,
  label,
  aspectClass,
  gradient,
  labelClassName,
  sizes,
}: {
  image: string;
  label: string;
  aspectClass: string;
  gradient: string;
  labelClassName: string;
  sizes: string;
}) {
  return (
    <div className={`relative block overflow-hidden ${aspectClass}`}>
      <Image
        src={`/images/${image}.webp`}
        alt={label}
        fill
        sizes={sizes}
        className="object-cover"
      />
      <div className="pointer-events-none absolute inset-0" style={{ background: gradient }} />
      <span className={labelClassName}>{label}</span>
    </div>
  );
}
