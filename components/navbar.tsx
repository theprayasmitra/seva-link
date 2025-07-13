"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import {
  Heart,
  Menu,
  X,
  ChevronDown,
  Users,
  Building2,
  HandHeart,
  BarChart3,
  FileText,
  Phone,
  Info,
  Target,
  Eye,
  Award,
  Calendar,
  MapPin,
  Mail,
} from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">SevaLink</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* About Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                About <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/about" className="flex items-center">
                    <Info className="mr-2 h-4 w-4" />
                    About SevaLink
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/vision" className="flex items-center">
                    <Eye className="mr-2 h-4 w-4" />
                    Our Vision
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/mission" className="flex items-center">
                    <Target className="mr-2 h-4 w-4" />
                    Our Mission
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/team" className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    Our Team
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* For Donors Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                For Donors <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/donors" className="flex items-center">
                    <Heart className="mr-2 h-4 w-4" />
                    Start Donating
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/donors/find-ngo" className="flex items-center">
                    <Building2 className="mr-2 h-4 w-4" />
                    Find NGOs
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/donors/dashboard" className="flex items-center">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    My Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/donors/impact-tracking" className="flex items-center">
                    <Award className="mr-2 h-4 w-4" />
                    Track Impact
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/donors/csr" className="flex items-center">
                    <FileText className="mr-2 h-4 w-4" />
                    CSR Solutions
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* For NGOs Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                For NGOs <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/ngos" className="flex items-center">
                    <Building2 className="mr-2 h-4 w-4" />
                    List Your NGO
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/ngos/register" className="flex items-center">
                    <FileText className="mr-2 h-4 w-4" />
                    Registration
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/ngos/dashboard" className="flex items-center">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    NGO Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/ngos/resources" className="flex items-center">
                    <Award className="mr-2 h-4 w-4" />
                    Resources & Tools
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Volunteer Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                Volunteer <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/volunteer" className="flex items-center">
                    <HandHeart className="mr-2 h-4 w-4" />
                    Volunteer Opportunities
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/volunteer/events" className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    Upcoming Events
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/volunteer/skills" className="flex items-center">
                    <Award className="mr-2 h-4 w-4" />
                    Skills-Based Volunteering
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                Contact <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/contact" className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    Get in Touch
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contact/support" className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    Support & FAQs
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contact/partnerships" className="flex items-center">
                    <Building2 className="mr-2 h-4 w-4" />
                    Partnerships
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contact/locations" className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    Our Locations
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className="bg-blue-600 hover:bg-blue-700">Join Now</Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/donors"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                For Donors
              </Link>
              <Link
                href="/ngos"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                For NGOs
              </Link>
              <Link
                href="/volunteer"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Volunteer
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="w-full mt-2 bg-blue-600 hover:bg-blue-700">Join Now</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
