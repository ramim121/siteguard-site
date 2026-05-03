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
  objectPosition = "center",
}: ScreenshotFrameProps) {
  return (
    <figure className="screenshot-frame">
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
            style={{ objectFit: "cover", objectPosition }}
          />
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          priority={priority}
        />
      )}
    </figure>
  );
}
