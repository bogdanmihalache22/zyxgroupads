import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="w-screen relative left-1/2 -translate-x-1/2 pt-6 bg-white z-50">
        <nav className="flex items-center justify-between px-8">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">ZYX Group Ads</span>
          </div>
          
          <div className="flex items-center justify-center gap-8 flex-1">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <a href="/presenting" className="text-sm font-medium hover:text-primary transition-colors">
              Presenting
            </a>
            <a href="/services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </a>
            <a href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          
          <div className="w-32"></div>
        </nav>
      </header>
      <hr className="w-screen relative left-1/2 -translate-x-1/2 border-gray-400 mt-6" />
    </>
  );
}
