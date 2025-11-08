import { Mic, BarChart3, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Voice-Based Logging',
    description: 'Speak naturally and Prolog understands. No more searching through exercise lists or typing sets and reps.',
  },
  {
    icon: BarChart3,
    title: 'Workout Analytics',
    description: 'Beautiful charts and insights show your progress over time. See your PRs, volume trends, and more.',
  },
  {
    icon: Sparkles,
    title: 'AI Recommendations',
    description: 'Get personalized workout suggestions based on your history, goals, and recovery patterns.',
  },
];

export const Features = () => {
  return (
    <section className="py-24 relative">
      {/* Subtle background effect */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to track, analyze, and improve your training
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-[var(--shadow-card)] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
