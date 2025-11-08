import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import heroPhone from '@/assets/hero-phone.png';

export const Hero = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the list!",
        description: "We'll send you a private invite when the beta opens.",
      });
      setEmail('');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient glow background */}
      <div className="absolute inset-0 bg-[var(--gradient-glow)] pointer-events-none" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Speak Your Workout.</span>
              <br />
              <span className="text-foreground">Train Smarter.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Prolog lets you log your workouts effortlessly — just talk to your AI fitness assistant.
            </p>

            {/* Email form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-input border-border text-foreground placeholder:text-muted-foreground h-12 text-lg"
              />
              <Button 
                type="submit" 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 px-8 glow-effect"
              >
                Join the Beta
              </Button>
            </form>

            <p className="text-sm text-muted-foreground mt-4">
              🎉 Invite-only beta. Limited spots available.
            </p>
          </div>

          {/* Right content - Phone mockup */}
          <div className="relative animate-slide-up hidden lg:block">
            <div className="relative">
              <img 
                src={heroPhone} 
                alt="Prolog app interface showing voice workout logging" 
                className="w-full max-w-md mx-auto drop-shadow-2xl glow-effect"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
