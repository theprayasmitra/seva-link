import Navigation from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, BarChart3, Award, Users, CheckCircle, TrendingUp } from "lucide-react";
import Link from "next/link";

const Donors = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Find NGOs",
      description: "Choose with confidence from our comprehensive, curated database of verified NGOs across India.",
      link: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: [
        "Impact stories and real beneficiary journeys",
        "Transparency badges for compliance and fund utilization", 
        "Photos, videos, and project milestones",
        "Ratings and reviews from other donors"
      ],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Track Contributions", 
      description: "Your personal dashboard gives you complete visibility into your giving impact.",
      link: "https://images.unsplash.com/photo-1686061592689-312bbfb5c055?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: [
        "Donation history with amounts, dates, and projects",
        "Live project progress updates with photos",
        "Financial clarity with receipts and CSR reports",
        "Recurring giving setup and reminders"
      ],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Recognition & Rewards",
      description: "Celebrate your impact and inspire others through our recognition system.",
      link: "https://plus.unsplash.com/premium_photo-1713628398142-b0a4be37e94a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: [
        "Top donor leaderboards and digital badges",
        "QR-coded impact certificates for every milestone",
        "Social media integration to share your journey", 
        "CSR-ready documentation for corporate reporting"
      ],
      color: "text-primary",
      bgColor: "bg-primary/10"  
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "100% Transparency",
      description: "Every rupee tracked with receipts and impact photos"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Verified NGOs",
      description: "All partners verified for FCRA, 80G, and CSR compliance"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Real-time Impact",
      description: "Live updates and milestone tracking for all projects"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              For Donors
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose with confidence, give with heart, track with precision. 
              Make every rupee count in India's most transparent giving platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link href="/find-ngos">Find NGOs to Support</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/track">Track My Impact</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 justify-center md:justify-start">
                <div className="text-primary">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {features.map((feature, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                    <div className={feature.color}>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
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
        </div>
      </section>

      {/* CSR Section */}
      <section className="py-16 bg-section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for CSR Managers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Export ready-to-present annexures for board meetings or annual disclosures in one click. 
              Streamline your CSR compliance with automated reporting.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link href="/csr">Explore CSR Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donors;