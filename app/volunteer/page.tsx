"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  HandHeart,
  Calendar,
  MapPin,
  Clock,
  Users,
  Award,
  Search,
  Filter,
  Heart,
  BookOpen,
  Stethoscope,
  Leaf,
  Scale,
  Palette,
  Code,
  ChevronRight,
} from "lucide-react"

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">Volunteer</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Share Your Skills,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Change a Life
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover meaningful volunteer opportunities that match your skills, schedule, and passion. Make a difference
            while building your experience and network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              <HandHeart className="mr-2 h-5 w-5" />
              Find Opportunities
            </Button>
            <Button size="lg" variant="outline">
              <Calendar className="mr-2 h-5 w-5" />
              View Events
            </Button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Volunteer Match</h2>
            <p className="text-xl text-gray-600">Search by skills, cause, location, or time commitment</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <Input
                  placeholder="Search by skills, cause, or location..."
                  className="h-12 text-lg"
                  icon={<Search className="h-5 w-5 text-gray-400" />}
                />
              </div>
              <Button size="lg" variant="outline" className="h-12 bg-transparent">
                <Filter className="mr-2 h-5 w-5" />
                Filters
              </Button>
              <Button size="lg" className="h-12 bg-purple-600 hover:bg-purple-700">
                Search
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "Teaching",
                "Healthcare",
                "Technology",
                "Legal Aid",
                "Design",
                "Marketing",
                "Environment",
                "Finance",
              ].map((skill) => (
                <Badge key={skill} variant="secondary" className="cursor-pointer hover:bg-purple-100">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Opportunities</h2>
            <p className="text-xl text-gray-600">Make a difference with your unique skills and expertise</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                  <Badge variant="secondary">Remote</Badge>
                </div>
                <CardTitle>Online Math Tutor</CardTitle>
                <CardDescription>Teach for India</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Help underprivileged students with mathematics through our online learning platform.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    2-3 hours/week
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    Flexible schedule
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    5-10 students per session
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Education
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Mathematics
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Remote
                  </Badge>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Stethoscope className="h-8 w-8 text-green-600" />
                  <Badge variant="secondary">On-site</Badge>
                </div>
                <CardTitle>Medical Camp Volunteer</CardTitle>
                <CardDescription>Smile Foundation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Assist doctors and nurses during free health checkups in rural communities.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    Full day commitment
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    Weekends only
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    Various locations in Maharashtra
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Healthcare
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Medical
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Weekend
                  </Badge>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Code className="h-8 w-8 text-purple-600" />
                  <Badge variant="secondary">Remote</Badge>
                </div>
                <CardTitle>Website Developer</CardTitle>
                <CardDescription>Akshaya Patra Foundation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Help build and maintain websites for our various programs and initiatives.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    5-10 hours/week
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    Project-based
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    Work with tech team
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Technology
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Web Development
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Remote
                  </Badge>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Scale className="h-8 w-8 text-orange-600" />
                  <Badge variant="secondary">Hybrid</Badge>
                </div>
                <CardTitle>Legal Aid Counselor</CardTitle>
                <CardDescription>Pratham Foundation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Provide legal guidance and support to underprivileged families and individuals.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    4-6 hours/week
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    Weekends preferred
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    Delhi NCR
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Legal
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Counseling
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Weekend
                  </Badge>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Palette className="h-8 w-8 text-pink-600" />
                  <Badge variant="secondary">Remote</Badge>
                </div>
                <CardTitle>Graphic Designer</CardTitle>
                <CardDescription>CRY - Child Rights and You</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Create compelling visual content for awareness campaigns and fundraising materials.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    3-5 hours/week
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    Flexible deadlines
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    Creative team collaboration
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Design
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Creative
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Marketing
                  </Badge>
                </div>
                <Button className="w-full bg-pink-600 hover:bg-pink-700">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Leaf className="h-8 w-8 text-green-600" />
                  <Badge variant="secondary">On-site</Badge>
                </div>
                <CardTitle>Environmental Educator</CardTitle>
                <CardDescription>Greenpeace India</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Conduct environmental awareness sessions in schools and community centers.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    2-4 hours/session
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    Monthly commitment
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    Bangalore & surrounding areas
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Environment
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Education
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Public Speaking
                  </Badge>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">Apply Now</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View All Opportunities
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">
              Join community events and make connections while making a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Calendar className="h-8 w-8 text-blue-600" />
                  <Badge className="bg-blue-100 text-blue-800">Upcoming</Badge>
                </div>
                <CardTitle>Education Summit 2024</CardTitle>
                <CardDescription>March 15, 2024 • Mumbai</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join leading educators, NGOs, and volunteers to discuss innovative teaching methods and educational
                  technology for underserved communities.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    9:00 AM - 6:00 PM
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    Taj Lands End, Mumbai
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    500+ expected attendees
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Register Now</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <HandHeart className="h-8 w-8 text-green-600" />
                  <Badge className="bg-green-100 text-green-800">This Weekend</Badge>
                </div>
                <CardTitle>Community Cleanup Drive</CardTitle>
                <CardDescription>March 18, 2024 • Delhi</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Help clean up Yamuna riverbank and plant trees. Bring your family and friends for a day of
                  environmental action and community building.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    7:00 AM - 12:00 PM
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    Yamuna Bank, ITO
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    200+ volunteers registered
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">Join Event</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Volunteer with SevaLink?</h2>
            <p className="text-xl text-gray-600">More than just giving back - grow personally and professionally</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Skill Development</h3>
              <p className="text-gray-600 text-sm">
                Gain new skills and enhance existing ones through meaningful projects and training opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Network Building</h3>
              <p className="text-gray-600 text-sm">
                Connect with like-minded professionals, NGO leaders, and fellow volunteers across India.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Fulfillment</h3>
              <p className="text-gray-600 text-sm">
                Experience the joy of making a real difference in people's lives and communities.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Recognition</h3>
              <p className="text-gray-600 text-sm">
                Receive certificates, LinkedIn endorsements, and recognition for your volunteer contributions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of volunteers who are creating positive change across India. Find opportunities that match
            your skills and schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              <HandHeart className="mr-2 h-5 w-5" />
              Start Volunteering
            </Button>
            <Button size="lg" variant="outline">
              <Calendar className="mr-2 h-5 w-5" />
              Browse Events
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
