import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import FilterBar from "@/components/FilterBar";
import PresentationCard from "@/components/PresentationCard";

export default function Home() {
  const cards = [
    { title: "Creative Campaign Design" },
    { title: "Interactive Animation" },
    { title: "Brand Identity Package" },
    { title: "Social Media Campaign" },
    { title: "Website Redesign" },
    { title: "Mobile App Interface" }
  ];

  return (
    <>
      <Header />
      <HeroBanner 
        heading="Welcome to ZYX Group Ads"
        text="We provide innovative advertising solutions that help your business grow and reach new audiences with cutting-edge marketing strategies."
      />
      <FilterBar />
      <section className="w-full bg-white py-16">
        <div className="w-full">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <PresentationCard key={index} title={card.title} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
