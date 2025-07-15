import { useEffect, useState } from "react";

interface StatItemProps {
  number: string;
  label: string;
  description: string;
  color: string;
}

const StatItem = ({ number, label, description, color }: StatItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumber, setAnimatedNumber] = useState("0");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate the number
          const numericValue = parseInt(number.replace(/\D/g, ''));
          const suffix = number.replace(/[0-9]/g, '');
          let current = 0;
          const increment = numericValue / 50;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
              setAnimatedNumber(number);
              clearInterval(timer);
            } else {
              setAnimatedNumber(Math.floor(current) + suffix);
            }
          }, 40);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`stat-${number}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [number]);

  return (
    <div 
      id={`stat-${number}`}
      className={`text-center p-8 rounded-2xl bg-white shadow-card hover:shadow-card-hover transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className={`text-5xl md:text-6xl font-bold mb-2 ${color}`}>
        {animatedNumber}
      </div>
      <div className="text-lg font-semibold text-foreground mb-2">
        {label}
      </div>
      <div className="text-sm text-muted-foreground">
        {description}
      </div>
    </div>
  );
};

const ImpactStats = () => {
  const stats = [
    {
      number: "25+",
      label: "LAC",
      description: "children and their families are impacted every year",
      color: "text-primary"
    },
    {
      number: "3000+",
      label: "VILLAGES",
      description: "and slums are reached out to across the country",
      color: "text-primary"
    },
    {
      number: "500+",
      label: "PROJECTS",
      description: "focused on education, healthcare, and women empowerment",
      color: "text-primary"
    },
    {
      number: "28+",
      label: "STATES",
      description: "are reached including the remotest areas",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#9aff8d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every contribution through SevaLink creates ripples of positive change across India. 
            Here's the measurable impact we've achieved together.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              number={stat.number}
              label={stat.label}
              description={stat.description}
              color={stat.color}
            />
          ))}
        </div>

        {/* Promise Statement */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-primary/10 to-primary/10 rounded-2xl border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Promise to You
            </h3>
            <p className="text-lg text-primary">
              Every rupee you contribute is tracked from the moment it leaves your hands until it touches lives. 
              With SevaLink, you always know the difference you are making—because{" "}
              <span className="font-bold text-primary">impact should be seen, not just hoped for.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;