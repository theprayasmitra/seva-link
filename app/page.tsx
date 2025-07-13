"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Heart,
  Users,
  Target,
  TrendingUp,
  Shield,
  Award,
  Search,
  BarChart3,
  Calendar,
  Download,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  CheckCircle,
  Globe,
  Handshake,
  Eye,
  Clock,
  Star,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"

export default function SevaLinkWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">SevaLink</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("donors")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                For Donors
              </button>
              <button
                onClick={() => scrollToSection("ngos")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                For NGOs
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
              <Button className="bg-blue-600 hover:bg-blue-700">Join Now</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection("donors")}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  For Donors
                </button>
                <button
                  onClick={() => scrollToSection("ngos")}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  For NGOs
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  Contact
                </button>
                <Button className="w-full mt-2 bg-blue-600 hover:bg-blue-700">Join Now</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              India's Platform for Purposeful Giving
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transforming Compassion into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                Measurable Change
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              SevaLink bridges the gap between conscientious companies, generous individuals, and grassroots NGOs to
              create a transparent, accountable, and inspiring ecosystem of change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Heart className="mr-2 h-5 w-5" />
                Start Giving
              </Button>
              <Button size="lg" variant="outline">
                <Users className="mr-2 h-5 w-5" />
                List Your NGO
              </Button>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="mt-16 relative">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white text-center">
              <div className="bg-white/20 rounded-lg p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-4">Every rupee tracked. Every impact measured.</h3>
                <p className="text-lg opacity-90">Join thousands of changemakers creating real impact across India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Promise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every rupee you contribute is tracked from the moment it leaves your hands until it touches lives. With
              SevaLink, you always know the difference you are making—because impact should be seen, not just hoped for.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Eye className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  A future where every Indian—corporate, citizen, or changemaker—can drive sustainable development and
                  social justice, together.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Empower donors with transparency and real-time impact tracking
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Strengthen NGOs with resources and digital tools
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Foster a culture of volunteering and shared responsibility
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Badge variant="secondary" className="mr-2">
                      Transparency
                    </Badge>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="secondary" className="mr-2">
                      Accountability
                    </Badge>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="secondary" className="mr-2">
                      Impact
                    </Badge>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="secondary" className="mr-2">
                      Trust
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Giving Made Effortless, Impact Made Visible</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                icon: Users,
                title: "Join the Movement",
                desc: "Register as a donor, NGO, or volunteer—free, easy, and secure.",
              },
              {
                icon: Search,
                title: "Discover Your Cause",
                desc: "Explore verified projects by theme, city, or UN SDG. Every listing is vetted for compliance.",
              },
              {
                icon: Heart,
                title: "Contribute or Volunteer",
                desc: "Donate securely or pledge your time and skills to causes that inspire you.",
              },
              {
                icon: BarChart3,
                title: "Track Your Impact",
                desc: "Follow your contribution with live dashboards, milestone updates, and reports.",
              },
              {
                icon: Award,
                title: "Celebrate and Share",
                desc: "Receive certificates, climb leaderboards, and share your journey of kindness.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-gray-400 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
            >
              Join SevaLink Now
            </Button>
          </div>
        </div>
      </section>

      {/* For Donors */}
      <section id="donors" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">For Donors</h2>
            <p className="text-xl text-gray-600">Choose with Confidence, Give with Heart</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Find an NGO</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Impact Stories</h4>
                    <p className="text-gray-600">Real beneficiary journeys and project milestones</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Transparency Badges</h4>
                    <p className="text-gray-600">Compliance, fund utilization, and reporting standards</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Photos & Videos</h4>
                    <p className="text-gray-600">See the change your support creates</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Ratings & Reviews</h4>
                    <p className="text-gray-600">Insights from donors and volunteers</p>
                  </div>
                </div>
              </div>
              <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
                Explore NGOs
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5 text-blue-600" />
                  Track My Contributions
                </CardTitle>
                <CardDescription>Your Giving, Visualized</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Donated</span>
                    <span className="font-semibold">₹1,25,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Projects Supported</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Lives Impacted</span>
                    <span className="font-semibold">450+</span>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Education</span>
                      <span>40%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "40%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Healthcare</span>
                      <span>35%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: "35%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Environment</span>
                      <span>25%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: "25%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Award className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle>Recognition & Leaderboards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Celebrating Every Changemaker</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Top Donors recognition</li>
                  <li>• Digital badges for social media</li>
                  <li>• QR-coded impact certificates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Download className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>CSR Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Ready-to-present documentation</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• One-click export for board meetings</li>
                  <li>• Annual disclosure reports</li>
                  <li>• ESG compliance documentation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Globe className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>SDG Mapping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Align with Global Goals</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Track by 17 UN SDGs</li>
                  <li>• Impact visualization</li>
                  <li>• Global alignment reporting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For NGOs */}
      <section id="ngos" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">For NGOs</h2>
            <p className="text-xl text-gray-600">Amplify Your Mission, Unlock New Opportunities</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">List Your NGO</h3>
              <p className="text-gray-600 mb-6">
                SevaLink is your gateway to India's most engaged donor community. Register your NGO to showcase your
                work, build trust, and attract support.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-lg p-2 mr-4">
                    <Eye className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Showcase Your Work</h4>
                    <p className="text-gray-600">
                      Create a rich profile with your mission, certifications, and flagship projects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 rounded-lg p-2 mr-4">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Build Trust</h4>
                    <p className="text-gray-600">
                      Our team verifies all documents within 72 hours, so donors know you're credible.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-lg p-2 mr-4">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Attract Support</h4>
                    <p className="text-gray-600">
                      Get discovered by companies, individuals, and volunteers seeking to make a difference.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 bg-green-600 hover:bg-green-700">
                Register Your NGO
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5 text-green-600" />
                  NGO Dashboard
                </CardTitle>
                <CardDescription>Your Command Center for Impact</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">₹2.5L</div>
                      <div className="text-sm text-gray-600">Funds Received</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">8</div>
                      <div className="text-sm text-gray-600">Active Projects</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Project Completion</span>
                      <span className="text-sm font-semibold">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Recent Activities</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Milestone report submitted</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                        <span>Volunteer event scheduled</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-blue-500 mr-2" />
                        <span>New donor review received</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Target className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Manage Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Your Work, Digitally Empowered</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Detailed project pages with budgets</li>
                  <li>• Milestone updates with receipts</li>
                  <li>• Real-time donor engagement</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Award className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle>High Impact Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Excellence Rewarded</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Transparent ranking criteria</li>
                  <li>• Priority placement in searches</li>
                  <li>• Special platform recognition</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Users className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Volunteer Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Build Your Network</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Volunteer sign-ups & RSVPs</li>
                  <li>• Event management tools</li>
                  <li>• Community engagement analytics</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transparency & Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transparency & Impact</h2>
            <p className="text-xl text-gray-600">Every Rupee Accounted For</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Fund Utilization Reports</h3>
              <p className="text-gray-600 mb-6">
                SevaLink's commitment to transparency means every project publishes a detailed breakdown of
                expenditures—materials, staffing, outreach—along with stamped invoices.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Real-time expense tracking</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Stamped invoice verification</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Auditor-friendly filtering</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Complete financial transparency</span>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Project Fund Breakdown</CardTitle>
                <CardDescription>Education Initiative - Rural Schools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Teaching Materials</span>
                    <span className="font-semibold">₹45,000 (45%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Staff Training</span>
                    <span className="font-semibold">₹30,000 (30%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "30%" }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Infrastructure</span>
                    <span className="font-semibold">₹20,000 (20%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: "20%" }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Administrative</span>
                    <span className="font-semibold">₹5,000 (5%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: "5%" }}></div>
                  </div>

                  <Separator />

                  <div className="flex justify-between items-center font-semibold">
                    <span>Total Utilized</span>
                    <span>₹1,00,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events & Volunteering */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Events & Volunteering</h2>
            <p className="text-xl text-gray-600">Engage, Learn, Inspire</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-blue-600" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900">Education Summit 2024</h4>
                    <p className="text-sm text-gray-600">March 15, 2024 • Mumbai</p>
                    <p className="text-sm text-gray-500">
                      Join leading educators and NGOs to discuss innovative teaching methods
                    </p>
                    <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                      RSVP
                    </Button>
                  </div>

                  <div className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-semibold text-gray-900">Healthcare Outreach</h4>
                    <p className="text-sm text-gray-600">March 22, 2024 • Delhi</p>
                    <p className="text-sm text-gray-500">
                      Volunteer for free health checkups in underserved communities
                    </p>
                    <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                      Join
                    </Button>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-4">
                    <h4 className="font-semibold text-gray-900">Environmental Cleanup</h4>
                    <p className="text-sm text-gray-600">March 30, 2024 • Bangalore</p>
                    <p className="text-sm text-gray-500">Help clean local water bodies and plant trees</p>
                    <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                      Volunteer
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Handshake className="mr-2 h-5 w-5 text-green-600" />
                  Volunteer Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">Teaching Assistant</h4>
                      <Badge variant="secondary">Remote</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Help students with online learning • 2-3 hours/week</p>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">
                        Education
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Flexible
                      </Badge>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">Legal Aid Volunteer</h4>
                      <Badge variant="secondary">On-site</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Provide legal guidance to underprivileged • Weekends</p>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">
                        Legal
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Weekend
                      </Badge>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">Graphic Designer</h4>
                      <Badge variant="secondary">Remote</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Create awareness materials for campaigns • Project-based
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">
                        Design
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Creative
                      </Badge>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">Browse All Opportunities</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Let's Build Impact Together</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">For partnerships and general inquiries</p>
                <a href="mailto:partners@sevalink.org" className="text-blue-600 hover:underline">
                  partners@sevalink.org
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Phone className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Speak with our support team</p>
                <a href="tel:+914440005000" className="text-green-600 hover:underline">
                  +91 44 4000 5000
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Our headquarters in Chennai</p>
                <p className="text-purple-600">
                  SevaLink Foundation
                  <br />
                  Chennai, India
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Support & FAQs</h3>
            <p className="text-gray-600 mb-6">
              Find instant answers on registration, payments, tax receipts, and volunteer hours. Still need help? Raise
              a support ticket and our team will respond within one business day.
            </p>
            <Button variant="outline" className="mr-4 bg-transparent">
              View FAQs
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Contact Support</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">SevaLink</span>
              </div>
              <p className="text-gray-400 mb-4">Every Rupee, Every Hour, Every Heartbeat—Accounted For.</p>
              <p className="text-gray-400">Join us in building a more just, compassionate, and sustainable India.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About SevaLink
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    For Donors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    For NGOs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Donate Now
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Find an NGO
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    List Your NGO
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Volunteer
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 SevaLink Foundation. All Rights Reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
