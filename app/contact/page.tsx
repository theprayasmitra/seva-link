"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Building2,
  Users,
  HelpCircle,
  Send,
  CheckCircle,
} from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Contact Us</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Let's Build Impact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Together</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Have questions about SevaLink? Want to partner with us? Or need support with your account? We're here to
            help you make a difference.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Choose the best way to reach us</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Speak with our support team</p>
                <div className="space-y-2">
                  <a href="tel:+914440005000" className="block text-blue-600 hover:underline font-medium">
                    +91 44 4000 5000
                  </a>
                  <p className="text-sm text-gray-500">Mon-Fri, 9 AM - 6 PM IST</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <Mail className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">For detailed inquiries</p>
                <div className="space-y-2">
                  <a href="mailto:hello@sevalink.org" className="block text-green-600 hover:underline font-medium">
                    hello@sevalink.org
                  </a>
                  <p className="text-sm text-gray-500">Response within 24 hours</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle>Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Instant support</p>
                <div className="space-y-2">
                  <Button className="bg-purple-600 hover:bg-purple-700">Start Chat</Button>
                  <p className="text-sm text-gray-500">Available 24/7</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <HelpCircle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <CardTitle>Help Center</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Find instant answers</p>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                  >
                    Browse FAQs
                  </Button>
                  <p className="text-sm text-gray-500">Self-service support</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-xl text-gray-600">We'll get back to you within one business day</p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input id="firstName" placeholder="Enter your first name" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input id="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    Organization (Optional)
                  </label>
                  <Input id="organization" placeholder="Your company or NGO name" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input id="subject" placeholder="What is this regarding?" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea id="message" rows={6} placeholder="Tell us more about your inquiry..." required />
                </div>

                <div className="flex items-center">
                  <input
                    id="newsletter"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                    I'd like to receive updates about SevaLink's impact and new features
                  </label>
                </div>

                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Specialized Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Specialized Support</h2>
            <p className="text-xl text-gray-600">Direct lines for specific needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Building2 className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Corporate Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  CSR programs, employee engagement, and strategic partnerships for corporations.
                </p>
                <div className="space-y-2">
                  <a href="mailto:partnerships@sevalink.org" className="block text-blue-600 hover:underline">
                    partnerships@sevalink.org
                  </a>
                  <p className="text-sm text-gray-500">Dedicated relationship manager</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Users className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>NGO Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Registration assistance, platform training, and ongoing support for NGOs.
                </p>
                <div className="space-y-2">
                  <a href="mailto:ngos@sevalink.org" className="block text-green-600 hover:underline">
                    ngos@sevalink.org
                  </a>
                  <p className="text-sm text-gray-500">Dedicated NGO success team</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <HelpCircle className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Technical Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Platform issues, account problems, and technical assistance for all users.
                </p>
                <div className="space-y-2">
                  <a href="mailto:support@sevalink.org" className="block text-purple-600 hover:underline">
                    support@sevalink.org
                  </a>
                  <p className="text-sm text-gray-500">24-hour response guarantee</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-xl text-gray-600">Visit us at our offices across India</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <MapPin className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Headquarters - Chennai</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-600">
                  <p>SevaLink Foundation</p>
                  <p>123 Anna Salai, Nandanam</p>
                  <p>Chennai, Tamil Nadu 600035</p>
                  <div className="flex items-center mt-4">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">Mon-Fri: 9 AM - 6 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <MapPin className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Delhi Office</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-600">
                  <p>SevaLink North India</p>
                  <p>456 Connaught Place</p>
                  <p>New Delhi, Delhi 110001</p>
                  <div className="flex items-center mt-4">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">Mon-Fri: 9 AM - 6 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <MapPin className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Mumbai Office</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-600">
                  <p>SevaLink West India</p>
                  <p>789 Bandra Kurla Complex</p>
                  <p>Mumbai, Maharashtra 400051</p>
                  <div className="flex items-center mt-4">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">Mon-Fri: 9 AM - 6 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How do I register as a donor on SevaLink?",
                answer:
                  "Registration is free and takes less than 2 minutes. Click 'Join Now' and follow the simple steps to create your account.",
              },
              {
                question: "How are NGOs verified on your platform?",
                answer:
                  "We conduct thorough verification including document checks, compliance verification (FCRA, 80G, CSR-1), and impact assessment within 72 hours.",
              },
              {
                question: "Can I track how my donation is being used?",
                answer:
                  "Yes! Every donation comes with real-time tracking, milestone updates, photos, and downloadable impact reports.",
              },
              {
                question: "Is there a minimum donation amount?",
                answer:
                  "No minimum amount required. You can donate as little as ₹100 or set up recurring donations of any amount.",
              },
              {
                question: "How do I get tax receipts for my donations?",
                answer:
                  "Tax receipts are automatically generated and emailed to you within 24 hours of your donation. You can also download them from your dashboard.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View All FAQs
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
