"use client"

import Navigation from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Building2,
  Users,
  TrendingUp,
  Award,
  BarChart3,
  CheckCircle,
  Eye,
  Shield,
  Target,
  Clock,
  Star,
  ChevronRight,
  FileText,
  Handshake,
} from "lucide-react"

export default function NGOsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">For NGOs</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Amplify Your Mission,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Unlock New Opportunities
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            SevaLink is your gateway to India's most engaged donor community. Showcase your work, build trust, and
            attract the support you need to create lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Building2 className="mr-2 h-5 w-5" />
              Register Your NGO
            </Button>
            <Button size="lg" variant="outline">
              <FileText className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why NGOs Choose SevaLink</h2>
            <p className="text-xl text-gray-600">Everything you need to grow your impact and reach</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">List Your NGO</h3>
              <p className="text-gray-600 mb-6">
                Join India's most trusted platform for social impact and connect with donors who care about your cause.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-lg p-2 mr-4">
                    <Eye className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Showcase Your Work</h4>
                    <p className="text-gray-600">
                      Create a rich profile with your mission, certifications, and flagship projects. Upload photos,
                      videos, and impact stories that inspire donors.
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
                      Our team verifies all documents within 72 hours. Get compliance badges that show donors you're a
                      credible, trustworthy partner.
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
                      Get discovered by companies, individuals, and volunteers actively seeking to make a difference in
                      your focus areas.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 bg-green-600 hover:bg-green-700">
                Get Started Today
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5 text-green-600" />
                  NGO Dashboard Preview
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

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Target className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Project Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Your Work, Digitally Empowered</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Create detailed project pages with budgets and timelines</li>
                  <li>• Upload milestone updates with receipts and photos</li>
                  <li>• Engage donors with real-time notifications</li>
                  <li>• Track funding progress and donor engagement</li>
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
                  <li>• Transparent ranking based on impact metrics</li>
                  <li>• Priority placement in donor searches</li>
                  <li>• Special recognition across our platform</li>
                  <li>• Featured in success stories and case studies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Users className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Community Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Build Your Network</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Manage volunteer sign-ups and RSVPs</li>
                  <li>• Host events and fundraising campaigns</li>
                  <li>• Connect with other NGOs and partners</li>
                  <li>• Access training and capacity building resources</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple Registration Process</h2>
            <p className="text-xl text-gray-600">Get verified and start receiving support in just 3 easy steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Submit Documents</h3>
              <p className="text-gray-600 text-sm">
                Upload your registration certificate, FCRA, 80G, and other compliance documents through our secure
                portal.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Verification</h3>
              <p className="text-gray-600 text-sm">
                Our team reviews your documents and conducts due diligence. Most NGOs get verified within 72 hours.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Go Live</h3>
              <p className="text-gray-600 text-sm">
                Create your profile, list projects, and start connecting with donors and volunteers immediately.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Start Registration
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">See how NGOs are thriving on SevaLink</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Akshaya Patra Foundation</CardTitle>
                    <CardDescription>Mid-day Meal Program</CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Verified</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "SevaLink helped us reach 500+ new corporate donors in just 6 months. The transparency tools have
                  significantly improved our donor retention rate."
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-blue-600">300%</div>
                    <div className="text-xs text-gray-600">Donor Growth</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">₹50L</div>
                    <div className="text-xs text-gray-600">Funds Raised</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-purple-600">95%</div>
                    <div className="text-xs text-gray-600">Retention Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Teach for India</CardTitle>
                    <CardDescription>Education & Leadership</CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Verified</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "The volunteer management features have been game-changing. We've connected with skilled professionals
                  who contribute beyond just funding."
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-blue-600">1000+</div>
                    <div className="text-xs text-gray-600">Volunteers</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">₹25L</div>
                    <div className="text-xs text-gray-600">Funds Raised</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-purple-600">50+</div>
                    <div className="text-xs text-gray-600">Projects</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Amplify Your Impact?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of verified NGOs who trust SevaLink to connect with donors and volunteers. Start building your
            community today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Building2 className="mr-2 h-5 w-5" />
              Register Your NGO
            </Button>
            <Button size="lg" variant="outline">
              <Handshake className="mr-2 h-5 w-5" />
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
