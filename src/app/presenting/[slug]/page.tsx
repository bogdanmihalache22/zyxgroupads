import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PresentationLargeCard from "@/components/PresentationLargeCard";
import { presentations, getPresentationBySlug } from "@/lib/presentations";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return presentations.map((presentation) => ({
    slug: presentation.slug,
  }));
}

export default async function PresentationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const presentation = getPresentationBySlug(slug);

  if (!presentation) {
    notFound();
  }

  return (
    <>
      <Header />
      <PresentationLargeCard
        title={presentation.title}
        description={presentation.description}
        imageUrl={presentation.imageUrl}
      />
      <Footer />
    </>
  );
}

