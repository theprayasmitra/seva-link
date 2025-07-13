"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Target, Shield, Users, Heart, TrendingUp, Award, CheckCircle, Globe, Handshake } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">About SevaLink</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Building India's Most{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Trusted Giving Platform
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            SevaLink was founded with a simple belief: every act of giving should create measurable, lasting change.
            We're transforming how India gives, receives, and tracks social impact.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2020, SevaLink emerged from a simple observation: while India has incredible generosity and
                  countless dedicated NGOs, the connection between donors and impact was often unclear.
                </p>
                <p>
                  We saw donors struggling to find trustworthy organizations, NGOs lacking visibility and resources, and
                  a general lack of transparency in the social sector. SevaLink was created to bridge these gaps with
                  technology, transparency, and trust.
                </p>
                <p>
                  Today, we're proud to be India's leading platform for purposeful giving, connecting thousands of
                  donors with hundreds of verified NGOs, creating measurable impact across the country.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">10,000+</div>
                  <div className="text-blue-100">Active Donors</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-blue-100">Verified NGOs</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">₹50Cr+</div>
                  <div className="text-blue-100">Funds Raised</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">1M+</div>
                  <div className="text-blue-100">Lives Impacted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
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
                  <div className="flex items-center">
                    <Badge variant="secondary" className="mr-2">
                      Innovation
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
            <p className="text-xl text-gray-600">Why thousands choose SevaLink for their giving journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Transparency</h3>
              <p className="text-gray-600 text-sm">
                Every rupee tracked from donation to impact with real-time reporting and verified receipts.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified NGOs</h3>
              <p className="text-gray-600 text-sm">
                All NGOs undergo rigorous verification for compliance, impact, and financial transparency.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Impact</h3>
              <p className="text-gray-600 text-sm">
                Live dashboards, milestone updates, and impact stories show your difference in real-time.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SDG Alignment</h3>
              <p className="text-gray-600 text-sm">
                All projects mapped to UN Sustainable Development Goals for global impact alignment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the people driving change across India</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Founder & CEO",
                bio: "Former McKinsey consultant with 15+ years in social impact and technology. Passionate about scaling solutions for social good.",
              },
              {
                name: "Rajesh Kumar",
                role: "CTO",
                bio: "Ex-Google engineer specializing in scalable platforms. Led technology teams at multiple successful startups.",
              },
              {
                name: "Anita Desai",
                role: "Head of NGO Relations",
                bio: "20+ years in the non-profit sector. Former director at leading development organizations across India.",
              },
            ].map((member, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether you're a donor, NGO, or volunteer, there's a place for you in the SevaLink community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Heart className="mr-2 h-5 w-5" />
              Start Giving
            </Button>
            <Button size="lg" variant="outline">
              <Handshake className="mr-2 h-5 w-5" />
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
