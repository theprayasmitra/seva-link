"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Award, Search, BarChart3, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navbar />

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

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
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
              <div key={index} className="text-center relative">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-8 -translate-x-4">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
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

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Active Donors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Verified NGOs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">₹50Cr+</div>
              <div className="text-gray-600">Funds Raised</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">1M+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
