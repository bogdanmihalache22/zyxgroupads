import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">ZYX Group Ads</span>
        </div>
      </nav>
    </header>
  );
}
