import Badge from "@/components/badge";
import Social from "@/components/social";
import Image from "next/image";

export default function Project({
  tagline,
  href,
  links,
  description,
  tags,
  images,
}: {
  tagline: string;
  href: string;
  links: { text: string; href: string; color: string }[];
  description: string[];
  tags: string[];
  images: { src: string; alt: string }[];
}) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="w-full sm:w-auto text-center sm:text-left text-red-400">
          {tagline}
        </p>
        <div className="flex w-full sm:w-auto flex-wrap justify-center gap-2">
          <Social text="GitHub" href={href} color="text-white-300" />
          {links.map((link, index) => (
            <Social
              key={index}
              text={link.text}
              href={link.href}
              color={link.color}
            />
          ))}
        </div>
      </div>
      {images.length > 0 && (
        <div className="flex justify-center gap-2 sm:gap-4 py-4">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={160}
              height={160}
              className="h-auto w-[30%] max-w-40 rounded-full"
            />
          ))}
        </div>
      )}
      <ul className="career">
        {description.map((item, index) => (
          <li className="career" key={index}>
            {item}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Badge key={index} text={tag} color="text-accent" />
        ))}
      </div>
    </>
  );
}
