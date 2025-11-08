import { Mic, Brain, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Mic,
    title: 'Speak Your Workout',
    description: 'Just tell Prolog what you did. "Did 3 sets of bench press at 185 pounds."',
  },
  {
    icon: Brain,
    title: 'Prolog Logs It Automatically',
    description: 'Our AI understands your workout and logs everything instantly — no manual entry.',
  },
  {
    icon: TrendingUp,
    title: 'Get Instant Insights',
    description: 'Track your progress and receive personalized workout suggestions based on your data.',
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to effortless workout tracking
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl glow-effect">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10">
                <step.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
