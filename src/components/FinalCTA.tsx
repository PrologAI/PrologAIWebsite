import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

export const FinalCTA = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the waitlist!",
        description: "We'll send you a private invite when the beta opens.",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary font-medium text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Invite-Only Beta
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to <span className="text-gradient">Transform</span> Your Training?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Join the waitlist and be among the first to experience effortless workout tracking. 
              We'll send you a private invite when the beta opens.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-input border-border text-foreground placeholder:text-muted-foreground h-14 text-lg"
              />
              <Button 
                type="submit" 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 px-8 glow-effect"
              >
                Join Waitlist
              </Button>
            </form>

            <p className="text-sm text-muted-foreground mt-6">
              No spam, ever. Just your invite when it's ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
