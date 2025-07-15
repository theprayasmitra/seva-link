import Navigation from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Search, Filter, Star, HeartHandshake } from "lucide-react";
import Link from "next/link";

const FindNGO = () => {
  const features = [
    "Impact Stories: Real beneficiary journeys and project milestones.",
    "Transparency Badges: Compliance, fund utilization, and reporting standards.",
    "Photos & Videos: See the change your support creates.",
    "Ratings & Reviews: Insights from donors and volunteers."
  ];

  const stories = [
    {
      title: "From Slums to Schools",
      description:
        "An NGO in Mumbai helped over 500 children get access to quality education through community schooling.",
      image:
        "https://images.unsplash.com/photo-1722807797686-6d9e4041f534?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Clean Water for Rural Bihar",
      description:
        "With donor support, a grassroots NGO installed solar-powered filtration systems in 20+ villages.",
      image:
        "https://images.unsplash.com/photo-1653251135161-08703c56be5d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Women Empowerment Through Skills",
      description:
        "Self-help groups trained in tailoring and entrepreneurship uplifted 300+ women in Odisha.",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1170&auto=format&fit=crop",
    },
  ];

  const partners = [
    "https://www.halogencreative.co.uk/wp-content/uploads/2016/03/1370677824big-graphic-logo.png",
    "https://www.halogencreative.co.uk/wp-content/uploads/2016/03/1370677824big-graphic-logo.png",
    "https://www.halogencreative.co.uk/wp-content/uploads/2016/03/1370677824big-graphic-logo.png",
    "https://www.halogencreative.co.uk/wp-content/uploads/2016/03/1370677824big-graphic-logo.png",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Find an NGO
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Choose with Confidence, Give with Heart
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            SevaLink brings you India’s most comprehensive, curated database of NGOs—each one carefully verified for compliance (FCRA, 80G, CSR-1) and impact. Search by cause, city, or SDG, and explore rich profiles featuring:
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link href="/explore">Start Exploring NGOs</Link>
          </Button>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16 bg-white border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* List */}
          <div>
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Search className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              What You'll Find
            </h3>
            <ul className="space-y-3">
              {features.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div>
            <Card className="shadow-card">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1170&auto=format&fit=crop"
                  alt="NGO Search"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recommendation Engine */}
      <section className="py-16 md:py-24 bg-section-gradient">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our recommendation engine matches you with projects that align with your values and interests.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link href="/recommendation">Try the Recommender</Link>
          </Button>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Success Stories</h2>
            <p className="text-muted-foreground text-lg mt-2 max-w-2xl mx-auto">
              See how donors like you have helped create real-world impact.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story, idx) => (
              <Card key={idx} className="overflow-hidden shadow-lg">
                <img src={story.image} alt={story.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">{story.title}</h4>
                  <p className="text-muted-foreground text-sm">{story.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners/Trusted By */}
      <section className="py-16 bg-gray-50 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <HeartHandshake className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-foreground">Trusted By Leading Organizations</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We're proud to be used by top non-profits and global partners.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {partners.map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt="Partner logo"
                className="h-10 object-contain grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-section-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Support a Cause You Believe In?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Explore India's most transparent NGO platform. Let your giving journey begin with clarity, trust, and impact.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link href="/explore">Browse All NGOs</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FindNGO;
