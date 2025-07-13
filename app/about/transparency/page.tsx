import Navigation from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Target, Heart } from "lucide-react";
import Link from "next/link";

const About = () => {
  const values = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Transparency",
      description: "Every rupee tracked, every impact measured, every story verified."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Bringing together donors, NGOs, and volunteers for maximum impact."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Accountability",
      description: "Real-time reporting and milestone tracking for all projects."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassion",
      description: "Driven by empathy and the belief that every life can be transformed."
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
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">SevaLink</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming Compassion into Measurable Change
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Welcome to SevaLink, India's one-stop platform for Corporate Social Responsibility (CSR) and social impact. 
                  We believe that every act of giving—no matter how big or small—can spark a ripple of transformation.
                </p>
                <p>
                  SevaLink bridges the gap between conscientious companies, generous individuals, and grassroots NGOs 
                  to create a transparent, accountable, and inspiring ecosystem of change.
                </p>
              </div>
              <div className="mt-8">
                <Button variant="cta" size="lg" asChild>
                  <Link href="/how-it-works">See How It Works</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-16 bg-section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Promise
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Every rupee you contribute is tracked from the moment it leaves your hands until it touches lives. 
              With SevaLink, you always know the difference you are making—because impact should be seen, not just hoped for.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Sustainable development"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                A future where every Indian—corporate, citizen, or changemaker—can drive sustainable development 
                and social justice, together.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Empower Donors</h4>
                    <p className="text-muted-foreground">With choice, transparency, and real-time impact tracking.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Strengthen NGOs</h4>
                    <p className="text-muted-foreground">With resources, visibility, and digital tools.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Foster Volunteering</h4>
                    <p className="text-muted-foreground">And shared responsibility across communities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at SevaLink
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-card-hover transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">
                      {value.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;