// app/(routes)/manage-projects/page.tsx

import Navigation from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarClock, UploadCloud, BellRing, CheckCircle, FileText, TrendingUp } from "lucide-react";
import Link from "next/link";

const ManageProjects = () => {
  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Project Pages",
      description: "Create detailed project pages with budgets, timelines, and resource needs.",
      link: "https://plus.unsplash.com/premium_photo-1661290256778-3b821d52c514?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: [
        "Add descriptions, goals, categories, and SDG tags",
        "Define budgets and expected outcomes",
        "Highlight funding gaps to attract support",
        "Assign team leads and volunteers",
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: <UploadCloud className="w-8 h-8" />,
      title: "Milestone Updates",
      description: "Upload receipts, images, and impact stories in just a few clicks.",
      link: "https://images.unsplash.com/photo-1521790945508-bf2a36314e85",
      features: [
        "Track milestones with completion percentage",
        "Attach receipts and documentation",
        "Embed photos and short video clips",
        "Record field stories and beneficiary testimonials",
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: <BellRing className="w-8 h-8" />,
      title: "Real-Time Engagement",
      description: "Donors receive instant updates, keeping them invested in your success.",
      link: "https://images.unsplash.com/photo-1494173853739-c21f58b16055",
      features: [
        "Automated email and app notifications",
        "Custom thank-you messages for milestones",
        "Engagement metrics: views, reactions, shares",
        "Build trust through active communication",
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Built for NGOs",
      description: "Simple tools to manage complex workflows with ease.",
    },
    {
      icon: <CalendarClock className="w-6 h-6" />,
      title: "Time-Efficient",
      description: "Update donors without spreadsheets or extra admin.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Showcase Growth",
      description: "Highlight the evolution of your impact over time.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Manage Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Your work, digitally empowered. Track, update, and engage—all from one dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="bg-primary" asChild>
              <Link href="/ngos/ngo-dashboard">Go to My Dashboard</Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/learn-more">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3 justify-center md:justify-start">
              <div className="text-primary">{benefit.icon}</div>
              <div>
                <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Text */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                  <div className={feature.color}>{feature.icon}</div>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-lg text-muted-foreground mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <Card className="shadow-card">
                  <CardContent className="p-0">
                    <img
                      src={feature.link}
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

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Start Managing Projects Today</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of NGOs simplifying their operations and inspiring confidence with every update.
          </p>
          <Button size="lg" className="bg-primary" asChild>
            <Link href="/register">Register Your NGO</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ManageProjects;
