import type { NewsBlock } from "@/content/news";

interface ArticleBodyProps {
  blocks: NewsBlock[];
}

export function ArticleBody({ blocks }: ArticleBodyProps) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;
        switch (block.type) {
          case "heading":
            return (
              <h2 key={key} className="mt-6 text-t29 leading-[1.3] font-medium text-ink">
                {block.text}
              </h2>
            );
          case "list":
            return (
              <ul key={key} className="flex flex-col gap-3 text-t17 text-muted-strong">
                {block.items.map((item, itemIndex) => (
                  <li key={`${item}-${itemIndex}`} className="flex gap-3">
                    <span aria-hidden="true" className="text-brand">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={key}
                className="my-4 border-l-4 border-brand pl-6 font-serif text-t34 leading-[1.3] text-ink italic"
              >
                <p>{block.text}</p>
              </blockquote>
            );
          default:
            return (
              <p key={key} className="text-t17 leading-[1.7] text-muted-strong">
                {block.text}
              </p>
            );
        }
      })}
    </div>
  );
}
