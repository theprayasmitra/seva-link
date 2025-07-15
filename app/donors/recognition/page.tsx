import Navigation from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Trophy,
  Star,
  BadgeCheck,
  CheckCircle,
  Users,
} from "lucide-react";
import Link from "next/link";

const RecognitionPage = () => {
  const recognitions = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Top Donors",
      description:
        "See your name or company celebrated for generosity, consistency, and innovation in giving.",
    },
    {
      icon: <BadgeCheck className="w-8 h-8" />,
      title: "Digital Badges",
      description:
        "Showcase your impact on your website, intranet, or social media with beautiful, verifiable badges.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Impact Certificates",
      description:
        "Receive QR-coded, auto-generated certificates for every milestone—perfect for CSR dossiers and annual reports.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-hero-gradient text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Recognition & Leaderboards
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Celebrating Every Changemaker
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            We believe every act of generosity deserves to be recognized. Our system highlights the individuals and organizations powering change across India.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link href="/leaderboard">View Leaderboard</Link>
          </Button>
        </div>
      </section>

      {/* Recognition Features */}
      <section className="py-20 bg-white border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              How We Recognize You
            </h3>
            <ul className="space-y-6">
              {recognitions.map((item, idx) => (
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

          {/* Image or Certificates */}
          <div>
            <Card className="shadow-card">
              <CardContent className="p-0">
                <img
                  src="https://plus.unsplash.com/premium_photo-1683718217153-cb57b088b178?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Donor recognition visuals"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="py-16 bg-section-gradient text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Donors Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Recognition means more than a badge—it's motivation, appreciation,
            and proof of impact.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                name: "Anita R.",
                role: "Individual Donor",
                quote:
                  "Seeing my badge and certificate made me feel truly appreciated. It's also helped encourage my friends to give!",
              },
              {
                name: "GreenCo Pvt Ltd",
                role: "CSR Partner",
                quote:
                  "The automated CSR documentation has saved us weeks of reporting time. A must-have for any corporate giver.",
              },
              {
                name: "Rajiv Mehta",
                role: "Monthly Supporter",
                quote:
                  "I love watching our name climb the leaderboard. It keeps us engaged and shows how we're making a difference.",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl shadow-sm border">
                <p className="text-muted-foreground italic mb-4">
                  “{testimonial.quote}”
                </p>
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-hero-gradient text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Join the Leaderboard
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start your journey of giving and let the world celebrate your
            impact.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link href="/signup">Start Donating</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RecognitionPage;
