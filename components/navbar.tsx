"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = usePathname();

  const isActive = (path: string) => location === path;

  const navigationItems = [
    {
      label: "About SevaLink",
      href: "",
      submenu: [
        { label: "Our Story", href: "/about/story" },
        { label: "How It Works", href: "/about/how-it-works" },
        { label: "Impact & Transparency", href: "about/transparency" }
      ]
    },
    {
      label: "For Donors",
      href: "/donors",
      submenu: [
        { label: "Find NGOs", href: "/find-ngos" },
        { label: "Track Contributions", href: "/track" },
        { label: "Recognition", href: "/recognition" }
      ]
    },
    {
      label: "For NGOs",
      href: "/ngos",
      submenu: [
        { label: "List Your NGO", href: "/list-ngo" },
        { label: "Manage Projects", href: "/manage" },
        { label: "NGO Dashboard", href: "/ngo-dashboard" }
      ]
    },
    {
      label: "Get Involved",
      href: "/get-involved",
      submenu: [
        { label: "Volunteer", href: "/volunteer" },
        { label: "Events", href: "/events" },
        { label: "Corporate Partnerships", href: "/partnerships" }
      ]
    },
    {
      label: "Resources",
      href: "/resources",
      submenu: [
        { label: "Success Stories", href: "/stories" },
        { label: "Reports & Certificates", href: "/reports" },
        { label: "ESG & SDG Mapping", href: "/esg" }
      ]
    }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-foreground">SevaLink</span>
              <span className="text-xs text-muted-foreground -mt-1">Purposeful Giving</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-1 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span>{item.label}</span>
                  <ChevronDown className="w-4 h-4" />
                </Link>
                
                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="cta" size="lg" asChild>
              <Link href="/donate">Support a Cause</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-border">
              {navigationItems.map((item) => (
                <div key={item.label} className="space-y-1">
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                      isActive(item.href)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-4">
                <Button variant="cta" size="lg" className="w-full" asChild>
                  <Link href="/donate">Support a Cause</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;