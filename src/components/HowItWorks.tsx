import { useState } from 'react';
import { Mic, Brain, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import step1Image from "@/assets/step1.png";
import step2Image from "@/assets/step2.png";
import step3Image from "@/assets/step3.png";

const steps = [
  {
    icon: Mic,
    title: 'Speak Your Workout',
    description: 'Just tell Prolog what you did. "Did 3 sets of bench press at 185 pounds."',
    image: step1Image,
  },
  {
    icon: Brain,
    title: 'Prolog Logs It Automatically',
    description: 'Our AI understands your workout and logs everything instantly — no manual entry.',
    image: step2Image,
  },
  {
    icon: TrendingUp,
    title: 'Get Instant Insights',
    description: 'Track your progress and receive personalized workout suggestions based on your data.',
    image: step3Image,
  },
];

export const HowItWorks = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const step = steps[currentStep];
  const Icon = step.icon;

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

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

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center animate-slide-up">
            {/* Image on left */}
            <div>
              <img
                src={step.image}
                alt={step.title}
                className="w-96 rounded-2xl drop-shadow-2xl"
              />
            </div>

            {/* Content on right */}
            <div className="relative">
              <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-6">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              {/* <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-3xl glow-effect">
                {currentStep + 1}
              </div> */}
              <h3 className="text-3xl font-semibold mb-4 pt-4">{step.title}</h3>
              <p className="text-muted-foreground text-lg mb-8">{step.description}</p>

              {/* Navigation */}
              <div className="flex gap-4 items-center">
                <Button
                  onClick={handlePrev}
                  variant="outline"
                  size="lg"
                  className="rounded-full w-12 h-12 p-0"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <span className="text-sm text-muted-foreground">
                  Step {currentStep + 1} of {steps.length}
                </span>
                <Button
                  onClick={handleNext}
                  size="lg"
                  className="rounded-full w-12 h-12 p-0"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};