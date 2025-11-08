import { Instagram, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo and description */}
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-3">Prolog</h3>
              <p className="text-muted-foreground">
                The AI-powered fitness assistant that makes workout logging effortless.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact and social */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
              <div className="flex gap-4 mb-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:hello@prolog.app" 
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:hello@prolog.app" className="hover:text-primary transition-colors">
                  hello@prolog.app
                </a>
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 Prolog. All rights reserved. Speak your workout, train smarter.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
