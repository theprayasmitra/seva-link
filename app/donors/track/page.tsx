import Navigation from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3,
  CheckCircle,
  ClipboardList,
  Clock,
  FileText,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const TrackPage = () => {
  const features = [
    {
      icon: <ClipboardList className="w-8 h-8" />,
      title: "Donation History",
      description:
        "View your complete giving record with amounts, dates, and supported projects.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Project Progress",
      description:
        "Track live updates, milestone completions, and real impact with photos and videos.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Financial Clarity",
      description:
        "Download receipts, invoices, and CSR-ready reports for every donation.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Recurring Giving",
      description:
        "Set up monthly or quarterly giving, and receive automated reminders.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Track My Contributions
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Your Giving, Visualized
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Your personal dashboard is your window into the world of impact
            you’re creating. Instantly access donation history, live project
            updates, financial records, and more.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link href="/dashboard">Go to My Dashboard</Link>
          </Button>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-20 bg-white border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <BarChart3 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Dashboard Highlights
            </h3>
            <ul className="space-y-6">
              {features.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-4">
                  <div className="text-primary">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Sample Image */}
          <div>
            <Card className="shadow-card">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1170&auto=format&fit=crop"
                  alt="Dashboard Visualization"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CSR Managers Section */}
      <section className="py-16 bg-section-gradient">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            CSR Managers, We’ve Got You Covered
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Export ready-to-present annexures for board meetings or annual
            disclosures in one click. Save time and ensure compliance.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link href="/csr">Explore CSR Tools</Link>
          </Button>
        </div>
      </section>

      {/* Security and Trust */}
      <section className="py-20 bg-white border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div>
            <Card className="shadow-card">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1609154852308-a5c32bd4d3dc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Secure Platform"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div>
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Transparent. Secure. Reliable.
            </h3>
            <p className="text-muted-foreground mb-4">
              Your data and donations are protected with end-to-end encryption
              and real-time compliance reporting. We ensure accountability at
              every level of giving.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  ISO-compliant infrastructure
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  Automated reports for audit readiness
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  Private, donor-only access
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-hero-gradient text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Start Tracking Your Giving Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of donors using SevaLink to stay informed and make
            meaningful contributions with confidence.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrackPage;
