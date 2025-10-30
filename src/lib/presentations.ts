export interface Presentation {
  slug: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export const presentations: Presentation[] = [
  {
    slug: "messaging-flex-frame",
    title: "Messaging Flex Frame",
    description: "The Messaging unit is an excellent canvas for image‑led storytelling. A fast-loading, performant experience with one compelling image, headline, message and CTA.",
  },
  {
    slug: "flex-frame-2-column",
    title: "Flex Frame – 2 Column",
    description: "A two‑column layout designed for clarity: prominent visual on the right, concise copy on the left, optimized across devices.",
  },
  {
    slug: "flex-frame-campaign-highlight",
    title: "Flex Frame – Campaign Highlight",
    description: "Showcase your key creative with a responsive canvas that balances narrative and impact, driving attention and action.",
  },
];

export function getPresentationBySlug(slug: string): Presentation | undefined {
  return presentations.find((p) => p.slug === slug);
}

