import { Target, Zap, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Track Real Progress',
    description: 'See exactly how much stronger you\'re getting over time.',
  },
  {
    icon: Zap,
    title: 'Stay Motivated',
    description: 'Visual progress keeps you accountable and excited to train.',
  },
  {
    icon: Shield,
    title: 'Prevent Injury',
    description: 'Identify patterns and avoid overtraining before it\'s too late.',
  },
];

export const WhyLog = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Logging <span className="text-gradient">Matters</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tracking your workouts is the key to improvement, motivation, and staying injury-free. 
              But most people don't do it because it's a hassle. Prolog removes all the friction — 
              so you can stay consistent and actually see results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card/50 border border-border hover:bg-card transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <benefit.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
