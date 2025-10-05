import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  tags,
  link,
  image,
  links,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "flex flex-row overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full",
        className
      )}
    >
      {/* Thumbnail */}
      {image && (
        <Link href={href || "#"} className="flex-shrink-0 w-28 h-28">
          <Image
            src={image}
            alt={title}
            width={112}
            height={112}
            className="w-28 h-28 object-cover"
          />
        </Link>
      )}

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 p-2">
        {/* Title + Description + Tags */}
        <CardContent className="p-0 space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>

          {/* Tags (where dates used to be) */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="px-1 py-0 text-[10px]"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Description */}
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert line-clamp-3">
            {description}
          </Markdown>
        </CardContent>

        {/* Footer — Website / Source Buttons (keep original hover) */}
        {links && links.length > 0 && (
          <CardFooter className="p-0 pt-2">
            <div className="flex flex-row flex-wrap items-start gap-1">
              {links.map((link, idx) => (
                <Link href={link.href} key={idx} target="_blank" rel="noopener noreferrer">
                  <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              ))}
            </div>
          </CardFooter>
        )}
      </div>
    </Card>
  );
}
