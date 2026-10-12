import Badge from "@/components/badge";
import Social from "@/components/social";

export default function Project({
  tagline,
  href,
  links,
  description,
  tags,
}: {
  tagline: string;
  href: string;
  links: { text: string; href: string; color: string }[];
  description: string[];
  tags: string[];
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
