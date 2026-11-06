import { business } from "@/data/siteData";

const KEYWORD_PATTERN = /\[\[(.+?)\]\]/g;

/**
 * Renders a content string, turning each "[[keyword]]" into a link to the
 * Google Business Profile, styled like the template's keyword links.
 */
export default function LinkedText({ text }: { text: string }) {
  // split() with a capture group alternates: text, keyword, text, keyword, ...
  const parts = text.split(KEYWORD_PATTERN);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <a
            key={i}
            href={business.gmbLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-900 transition-colors"
          >
            {part}
          </a>
        ) : (
          part
        ),
      )}
    </>
  );
}
