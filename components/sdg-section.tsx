import { Card, CardContent } from "@/components/ui/card";

const sdgGoals = [
  {
    number: "3",
    title: "Good Health & Well Being",
    color: "bg-[#4C9F38]"
  },
  {
    number: "4", 
    title: "Quality Education",
    color: "bg-[#C5192D]"
  },
  {
    number: "5",
    title: "Gender Equality", 
    color: "bg-[#FF3A21]"
  },
  {
    number: "8",
    title: "Decent Work & Economic Growth",
    color: "bg-[#A21942]"
  },
  {
    number: "10",
    title: "Reduced Inequalities",
    color: "bg-[#DD1367]"
  },
  {
    number: "17",
    title: "Partnerships for the Goals",
    color: "bg-[#19486A]"
  }
];

const SDGSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Towards Achieving{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sustainable Development Goals
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our work aligns with the United Nations Sustainable Development Goals, 
            ensuring your contributions create lasting, measurable impact.
          </p>
        </div>

        {/* SDG Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {sdgGoals.map((sdg, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border-0 shadow-card overflow-hidden"
            >
              <CardContent className="p-0">
                <div className={`${sdg.color} aspect-square flex flex-col items-center justify-center text-white p-4 group-hover:scale-105 transition-transform duration-300`}>
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    #{sdg.number}
                  </div>
                  <div className="text-center text-sm md:text-base font-medium leading-tight">
                    {sdg.title}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Track Your SDG Impact
            </h3>
            <p className="text-lg text-muted-foreground">
              Our platform automatically maps your contributions to relevant SDGs, 
              giving you detailed insights into how your giving aligns with global sustainability targets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDGSection;