import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PresentationLargeCard from "@/components/PresentationLargeCard";

export default function PresentingPage() {
  return (
    <>
      <Header />
      
      <PresentationLargeCard
        title="Messaging Flex Frame"
        description="The Messaging unit is an excellent canvas for image‑led storytelling. A fast-loading, performant experience with one compelling image, headline, message and CTA."
      />

      <PresentationLargeCard
        title="Flex Frame – 2 Column"
        description="A two‑column layout designed for clarity: prominent visual on the right, concise copy on the left, optimized across devices."
      />

      <PresentationLargeCard
        title="Flex Frame – Campaign Highlight"
        description="Showcase your key creative with a responsive canvas that balances narrative and impact, driving attention and action."
      />
      <Footer />
    </>
  );
}


