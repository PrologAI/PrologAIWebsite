const testimonials = [
  {
    quote: "It feels like having a personal assistant in the gym! I just talk and everything gets logged perfectly.",
    author: "Alex M.",
    role: "Early Beta User",
  },
  {
    quote: "Finally, a workout app that doesn't interrupt my flow. I can focus on lifting instead of my phone.",
    author: "Sarah K.",
    role: "Powerlifter",
  },
  {
    quote: "The AI recommendations are spot-on. It's like having a coach that knows my exact training history.",
    author: "Jordan P.",
    role: "Fitness Enthusiast",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Early Users <span className="text-gradient">Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card/50 border border-border hover:bg-card transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-6">
                <svg className="w-10 h-10 text-primary opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <p className="text-lg mb-6 text-foreground leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
