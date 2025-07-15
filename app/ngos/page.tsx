"use client";

import Navigation from "@/components/navbar";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Eye, Shield, TrendingUp, Users, CheckCircle, Star, Award, FileText, Handshake } from "lucide-react";
import Link from "next/link";

const NgoPage = () => {
  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Showcase Your Work",
      description:
        "Create a rich profile with your mission, certifications, and flagship projects. Upload photos, videos, and impact stories that inspire donors.",
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1170&q=80",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Build Trust",
      description:
        "Get compliance badges that show donors you're credible. Our team verifies all documents within 72 hours to boost your visibility.",
      image:
        "https://plus.unsplash.com/premium_photo-1661906789703-a25a1e53180e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Attract Funding",
      description:
        "Gain exposure to corporates and individuals searching for verified NGOs aligned with their CSR or philanthropic goals.",
      image:
        "https://images.unsplash.com/photo-1633158829875-e5316a358c6f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="py-20 bg-hero-gradient text-center px-4">
        <div className="max-w-6xl mx-auto">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">For NGOs</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Empower Your NGO. <br />
            <span className="text-primary">Reach More. Raise More. Do More.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Get listed, verified, and funded through India's most trusted platform for NGOs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Building2 className="mr-2 h-5 w-5" />
              Register Your NGO
            </Button>
            <Button variant="outline" size="lg">
              <FileText className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 items-center gap-12 ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="flex items-center justify-start mb-6">
                  <div className="bg-primary/10 rounded-xl p-3 mr-4">{feature.icon}</div>
                  <h3 className="text-3xl font-bold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground text-lg">{feature.description}</p>
              </div>
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <Card className="shadow-md overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 bg-section-gradient text-center px-4">
        <div className="max-w-4xl mx-auto">
          <Award className="mx-auto w-10 h-10 text-yellow-500 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recognition & Leaderboards
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Celebrate your journey, and show the world your impact.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left text-muted-foreground max-w-5xl mx-auto">
            <div>
              <CheckCircle className="h-5 w-5 inline mr-2 text-green-600" />
              Top Donors: See your name or NGO celebrated for generosity, consistency, and innovation in impact.
            </div>
            <div>
              <CheckCircle className="h-5 w-5 inline mr-2 text-green-600" />
              Digital Badges: Add credibility with verified impact badges on your profile and website.
            </div>
            <div>
              <CheckCircle className="h-5 w-5 inline mr-2 text-green-600" />
              Impact Certificates: Auto-generated with QR codes — ideal for CSR and grant reporting.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background border-t border-border text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Get Discovered by Donors?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of verified NGOs already thriving on SevaLink.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg">
              <Building2 className="mr-2 h-5 w-5" />
              Register Now
            </Button>
            <Button variant="outline" size="lg">
              <Handshake className="mr-2 h-5 w-5" />
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NgoPage;
