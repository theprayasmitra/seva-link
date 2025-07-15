"use client";

import Navigation from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Eye,
  Shield,
  Users,
  CheckCircle,
  Building2,
  TrendingUp,
  Globe,
} from "lucide-react";
import Link from "next/link";

const ListYourNGO = () => {
  const benefits = [
    {
      icon: <Eye className="w-6 h-6 text-primary" />,
      title: "Showcase Your Work",
      description:
        "Create a rich profile with your mission, certifications, and flagship projects. Upload photos, videos, and stories.",
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Build Trust",
      description:
        "Our team verifies all documents within 72 hours so donors know you’re a credible, compliant partner.",
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Attract Support",
      description:
        "Be discovered by individuals, companies, and volunteers actively seeking impactful NGOs.",
    },
  ];

  const features = [
    {
      title: "Expand Your Reach",
      description:
        "Get featured in donor newsletters, spotlighted on homepages, and suggested in corporate searches.",
      points: [
        "Access to SevaLink’s active donor base",
        "Opportunities for CSR collaborations",
        "Priority listing for verified NGOs",
        "Invite to fundraising challenges",
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      image:
        "https://plus.unsplash.com/premium_photo-1664533227323-1502b504cac4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Digital Tools for Impact",
      description:
        "Easily manage projects, update milestones, and communicate transparently with donors.",
      points: [
        "Upload receipts, photos, and reports",
        "Track donations in real-time",
        "Automated impact certificates",
        "Simple volunteer onboarding",
      ],
      icon: <Globe className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            List Your NGO
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Amplify your mission, unlock new opportunities. SevaLink is your
            gateway to India’s most engaged donor community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link href="/register">Register Your NGO</Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/learn-more">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div>{benefit.icon}</div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  {benefit.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.points.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <Card className="shadow-card">
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

      {/* Final CTA */}
      <section className="py-16 bg-section-gradient text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Amplify Your Impact?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of verified NGOs who trust SevaLink to raise funds,
            manage projects, and build lasting donor relationships.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link href="/register">Get Started Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ListYourNGO;
