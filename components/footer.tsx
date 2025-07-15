import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "About SevaLink",
      links: [
        { label: "Our Story", href: "/about" },
        { label: "Impact & Transparency", href: "/transparency" },
        { label: "How It Works", href: "/how-it-works" },
        { label: "Leadership Team", href: "/team" },
        { label: "Careers", href: "/careers" }
      ]
    },
    {
      title: "For Donors",
      links: [
        { label: "Find NGOs", href: "/find-ngos" },
        { label: "Track Contributions", href: "/track" },
        { label: "Recognition & Badges", href: "/recognition" },
        { label: "CSR Solutions", href: "/csr" },
        { label: "Corporate Partnerships", href: "/partnerships" }
      ]
    },
    {
      title: "For NGOs",
      links: [
        { label: "List Your NGO", href: "/list-ngo" },
        { label: "Manage Projects", href: "/manage" },
        { label: "NGO Dashboard", href: "/ngo-dashboard" },
        { label: "High Impact Program", href: "/high-impact" },
        { label: "Resources & Support", href: "/ngo-resources" }
      ]
    },
    {
      title: "Get Involved",
      links: [
        { label: "Volunteer Opportunities", href: "/volunteer" },
        { label: "Upcoming Events", href: "/events" },
        { label: "Individual Support", href: "/individual-support" },
        { label: "School Partnerships", href: "/school-partnerships" },
        { label: "Community Programs", href: "/community" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Success Stories", href: "/stories" },
        { label: "Annual Reports", href: "/reports" },
        { label: "ESG & SDG Mapping", href: "/esg" },
        { label: "Blog & Newsletter", href: "/blog" },
        { label: "Research & Insights", href: "/research" }
      ]
    }
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-white/70 mb-6">
              Get updates on impact stories, new NGO partnerships, and opportunities to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button variant="outline" size="lg" className="text-black">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl">SevaLink</span>
                <span className="text-sm text-white/70">Purposeful Giving</span>
              </div>
            </Link>
            
            <p className="text-white/70 mb-6 leading-relaxed">
              India's one-stop platform for Corporate Social Responsibility (CSR) and social impact. 
              Transforming compassion into measurable change through transparency and accountability.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-white/70">Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-white/70">+91 44 4000 5000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-white/70">hello@sevalink.org</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/70 text-sm mb-4 md:mb-0">
              © 2025 SevaLink Foundation. All Rights Reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/70 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-white/70 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-white/5 text-center">
            <p className="text-white/60 text-sm italic">
              "Every Rupee, Every Hour, Every Heartbeat—Accounted For. Join us in building a more just, compassionate, and sustainable India."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;