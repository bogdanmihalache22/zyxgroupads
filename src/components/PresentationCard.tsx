import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PresentationCardProps {
  title: string;
  imageUrl?: string;
}

export default function PresentationCard({ title, imageUrl = "/mintosko-WbN3XSUvlRc-unsplash.jpg" }: PresentationCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${imageUrl})`}}>
      </div>
      <hr className="border-gray-300 mt-4" />
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm font-bold text-gray-600">Learn More</p>
      </CardContent>
    </Card>
  );
}
