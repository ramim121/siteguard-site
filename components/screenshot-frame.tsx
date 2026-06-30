import Image from "next/image";

type ScreenshotFrameProps = {
  src: string;
  alt: string;
  label: string;
  priority?: boolean;
  cropped?: boolean;
  objectPosition?: string;
};

export function ScreenshotFrame({
  src,
  alt,
  label,
  priority = false,
  cropped = false,
  objectPosition = "top center",
}: ScreenshotFrameProps) {
  return (
    <figure className="screenshot-frame reveal">
      <div className="screenshot-topbar">
        <span />
        <span />
        <span />
        <p>{label}</p>
      </div>
      {cropped ? (
        <div className="screenshot-crop">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 60vw"
            style={{ objectFit: "cover", objectPosition }}
          />
        </div>
      ) : (
        <Image src={src} alt={alt} width={1920} height={1080} priority={priority} />
      )}
    </figure>
  );
}
