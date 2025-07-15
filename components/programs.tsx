import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Users, Briefcase, Leaf, Shield } from "lucide-react";
import Link from "next/link";

interface ProgramProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  href: string;
}

const ProgramCard = ({ icon, title, description, color, bgColor, href }: ProgramProps) => {
  return (
    <Card className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border-0 shadow-card">
      <CardHeader className="text-center pb-4">
        <div className={`w-16 h-16 ${bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <div className={color}>
            {icon}
          </div>
        </div>
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </CardDescription>
        <Button variant="outline" size="sm" asChild className="group-hover:border-primary group-hover:text-primary transition-colors">
          <Link href={href}>
            Learn More
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

const Programs = () => {
  const programs = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Education",
      description: "Education, nutrition and holistic development of children from underprivileged backgrounds",
      color: "text-primary",
      bgColor: "bg-primary/10",
      href: "/programs/education"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare",
      description: "Taking healthcare services to doorsteps of hard to reach communities across India",
      color: "text-primary",
      bgColor: "bg-primary/10",
      href: "/programs/healthcare"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Women Empowerment",
      description: "Empowering adolescent girls & women through community engagement and skill development",
      color: "text-primary",
      bgColor: "bg-primary/10",
      href: "/programs/women-empowerment"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Livelihood",
      description: "Skill training and placement support for underprivileged youth to secure sustainable employment",
      color: "text-primary",
      bgColor: "bg-primary/10",
      href: "/programs/livelihood"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Environmental Action",
      description: "Community-driven initiatives for climate action, clean energy, and sustainable development",
      color: "text-primary",
      bgColor: "bg-primary/10",
      href: "/programs/environment"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Disaster Response",
      description: "Emergency relief and rehabilitation support for communities affected by natural disasters",
      color: "text-primary",
      bgColor: "bg-primary/10",
      href: "/programs/disaster-response"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#b3ffaa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover verified projects across multiple impact areas. Every program is carefully vetted 
            for compliance and designed to create lasting change in communities.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              icon={program.icon}
              title={program.title}
              description={program.description}
              color={program.color}
              bgColor={program.bgColor}
              href={program.href}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-primary/5 rounded-2xl border border-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Choose a cause that resonates with you and start creating measurable impact today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link href="/find-ngos">
                  Find NGOs to Support
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/volunteer">
                  Volunteer Your Time
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;