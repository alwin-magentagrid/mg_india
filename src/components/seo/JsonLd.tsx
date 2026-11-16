import type { JsonLdObject } from "@/lib/schema";

interface JsonLdProps {
  data: JsonLdObject | JsonLdObject[];
}

export function JsonLd({ data }: JsonLdProps) {
  const serialized = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialized }} />;
}
