"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  
  const links = [
    { href: "/", label: "Home", match: /^\/?$/ },
    { href: "/presenting/", label: "Presenting", match: /^\/presenting\/?$/ },
    { href: "/about/", label: "About", match: /^\/about\/?$/ },
    { href: "/contact/", label: "Contact", match: /^\/contact\/?$/ }
  ];

  return (
    <>
      <header className="w-screen relative left-1/2 -translate-x-1/2 pt-6 bg-white z-50">
        <nav className="flex items-center justify-between px-8">
          <div className="flex items-center space-x-2">
            <Link href="/" aria-label="Go to home">
              <Image
                src="/zyx_ID_RGB_black 2.jpg"
                alt="ZYX Publishing Group"
                width={260}
                height={80}
                className="h-16 w-auto"
                priority
              />
            </Link>
          </div>
          <div className="flex items-center gap-8">
            {links.map(link => {
              const isActive = link.match.test(pathname || "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-bold transition-colors px-3 py-1 rounded-md 
                    ${isActive ? "bg-yellow-400 text-white" : "hover:text-primary"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>
      <hr className="w-screen relative left-1/2 -translate-x-1/2 border-gray-400 mt-6" />
    </>
  );
}
