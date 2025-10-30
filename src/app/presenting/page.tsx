import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PresentationLargeCard from "@/components/PresentationLargeCard";
import Link from "next/link";
import { presentations } from "@/lib/presentations";

export default function PresentingPage() {
  return (
    <>
      <Header />
      
      {presentations.map((presentation) => (
        <Link 
          key={presentation.slug} 
          href={`/presenting/${presentation.slug}/`}
          className="block hover:opacity-90 transition-opacity cursor-pointer"
        >
          <PresentationLargeCard
            title={presentation.title}
            description={presentation.description}
            imageUrl={presentation.imageUrl}
          />
        </Link>
      ))}
      <Footer />
    </>
  );
}


