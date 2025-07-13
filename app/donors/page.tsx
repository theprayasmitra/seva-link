"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Heart,
  Search,
  BarChart3,
  Award,
  Download,
  CheckCircle,
  TrendingUp,
  Star,
  Filter,
  ChevronRight,
} from "lucide-react"

export default function DonorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">For Donors</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Choose with Confidence,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Give with Heart
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover India's most comprehensive, curated database of NGOs. Every organization is carefully verified for
            compliance and impact, so you can give with complete confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Heart className="mr-2 h-5 w-5" />
              Start Donating
            </Button>
            <Button size="lg" variant="outline">
              <Search className="mr-2 h-5 w-5" />
              Explore NGOs
            </Button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Cause</h2>
            <p className="text-xl text-gray-600">Search by cause, location, or UN Sustainable Development Goal</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <Input
                  placeholder="Search NGOs, causes, or locations..."
                  className="h-12 text-lg"
                  icon={<Search className="h-5 w-5 text-gray-400" />}
                />
              </div>
              <Button size="lg" variant="outline" className="h-12 bg-transparent">
                <Filter className="mr-2 h-5 w-5" />
                Filters
              </Button>
              <Button size="lg" className="h-12 bg-blue-600 hover:bg-blue-700">
                Search
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "Education",
                "Healthcare",
                "Environment",
                "Women Empowerment",
                "Child Welfare",
                "Rural Development",
              ].map((category) => (
                <Badge key={category} variant="secondary" className="cursor-pointer hover:bg-blue-100">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features for Donors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Donors Choose SevaLink</h2>
            <p className="text-xl text-gray-600">Everything you need for confident, impactful giving</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Verified NGO Profiles</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Impact Stories</h4>
                    <p className="text-gray-600">
                      Real beneficiary journeys and project milestones with photos and videos
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Transparency Badges</h4>
                    <p className="text-gray-600">FCRA, 80G, CSR-1 compliance and fund utilization standards</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Ratings & Reviews</h4>
                    <p className="text-gray-600">Insights from other donors and volunteers who've worked with them</p>
                  </div>
                </div>
              </div>
              <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
                Browse NGOs
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Smile Foundation</CardTitle>
                    <CardDescription>Education & Child Welfare</CardDescription>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm font-medium">4.8</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">FCRA Verified</Badge>
                    <Badge variant="secondary">80G Certified</Badge>
                    <Badge variant="secondary">CSR Eligible</Badge>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Empowering underprivileged children through education, healthcare, and livelihood programs across 25
                    states in India.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-blue-600">2.5M+</div>
                      <div className="text-xs text-gray-600">Children Reached</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-600">₹150Cr</div>
                      <div className="text-xs text-gray-600">Funds Utilized</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-600">95%</div>
                      <div className="text-xs text-gray-600">Fund Efficiency</div>
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Donate Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Impact Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Real-time dashboards show exactly how your donations are being used
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Live project progress updates</li>
                  <li>• Photo and video documentation</li>
                  <li>• Milestone achievement notifications</li>
                  <li>• Downloadable impact reports</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Award className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle>Recognition Program</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Get recognized for your generosity and inspire others</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Digital badges for social sharing</li>
                  <li>• Donor leaderboards</li>
                  <li>• QR-coded impact certificates</li>
                  <li>• Annual giving summaries</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Download className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>CSR Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Simplified reporting for corporate social responsibility</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• One-click CSR annexures</li>
                  <li>• Board-ready presentations</li>
                  <li>• ESG reporting integration</li>
                  <li>• Audit-friendly documentation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donor Dashboard Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Personal Impact Dashboard</h2>
            <p className="text-xl text-gray-600">Track your giving journey and see your impact unfold in real-time</p>
          </div>

          <Card className="border-0 shadow-2xl max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="mr-2 h-5 w-5 text-blue-600" />
                My Giving Dashboard
              </CardTitle>
              <CardDescription>Your impact at a glance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">₹1,25,000</div>
                  <div className="text-sm text-gray-600">Total Donated</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">12</div>
                  <div className="text-sm text-gray-600">Projects Supported</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">450+</div>
                  <div className="text-sm text-gray-600">Lives Impacted</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">8</div>
                  <div className="text-sm text-gray-600">SDGs Supported</div>
                </div>
              </div>

              <Separator className="mb-6" />

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Recent Activity</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <Heart className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Donated to Education Initiative</div>
                        <div className="text-sm text-gray-600">Smile Foundation • 2 days ago</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">₹5,000</div>
                      <div className="text-sm text-green-600">Milestone reached</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Project Update Received</div>
                        <div className="text-sm text-gray-600">Clean Water Project • 1 week ago</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-blue-600">View Update</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of donors who trust SevaLink for their giving journey. Start creating measurable impact
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Heart className="mr-2 h-5 w-5" />
              Start Donating
            </Button>
            <Button size="lg" variant="outline">
              <Search className="mr-2 h-5 w-5" />
              Browse NGOs
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
