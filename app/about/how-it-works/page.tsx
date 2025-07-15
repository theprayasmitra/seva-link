"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Search, Heart, BarChart3, Award } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/navbar";
import { useState } from "react";
import Footer from "@/components/footer";

const steps = [
  {
    icon: <UserPlus className="w-8 h-8" />,
    title: "Join the Movement",
    description: "Register as a donor, NGO, or volunteer—free, easy, and secure.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Discover Your Cause",
    description: "Explore verified projects by theme (education, health, environment, and more), city, or UN SDG. Every listing is vetted for compliance and impact.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Contribute or Volunteer",
    description: "Donate securely through our payment gateway, or pledge your time and skills to causes that inspire you.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Track Your Impact",
    description: "Follow your contribution with live dashboards, milestone updates, and downloadable reports. See photos, invoices, and real stories from the ground.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Celebrate and Share",
    description: "Receive auto-generated certificates, climb our leaderboards, and share your journey—because every act of kindness deserves to be recognized.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  }
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 md:py-24 bg-section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Giving Made Effortless, Impact Made Visible. Follow these simple steps to start creating measurable change.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8 md:space-y-12 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step Number and Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div
                      className={`w-20 h-20 ${step.bgColor} rounded-2xl flex items-center justify-center mb-4`}
                    >
                      <div className={step.color}>{step.icon}</div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-foreground text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <Card className="flex-1 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
            </div>
            ))};
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Make a Difference?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of changemakers who are creating measurable impact across India.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link href="/get-started">Join SevaLink Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
    </div>
  );
};

export default HowItWorks;
