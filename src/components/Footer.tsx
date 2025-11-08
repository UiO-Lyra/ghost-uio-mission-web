import { Rocket, Instagram, Linkedin, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-space-darker border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Rocket className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">GHOST Mission</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Student-led atmospheric research using sounding rocket technology at the University of Oslo.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#mission" className="hover:text-primary transition-colors">Mission</a>
              </li>
              <li>
                <a href="#technology" className="hover:text-primary transition-colors">MUNIR-3</a>
              </li>
              <li>
                <a href="#launch" className="hover:text-primary transition-colors">Launch</a>
              </li>
              <li>
                <a href="#team" className="hover:text-primary transition-colors">Team</a>
              </li>
              <li>
                <a href="#join" className="hover:text-primary transition-colors">Join</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-sm text-muted-foreground mb-1">Lyra</p>
            <p className="text-sm text-muted-foreground mb-1">Sem Sælands vei 24, UiO</p>
            <p className="text-sm text-muted-foreground mb-4">0371 Oslo</p>
            <a
              href="mailto:lyra@terraspace.no"
              className="text-sm text-primary hover:text-primary-glow transition-colors"
            >
              lyra@terraspace.no
            </a>
            <div className="mt-4 flex items-center gap-3 text-muted-foreground">
              <a href="https://www.instagram.com/lyra.terraspace/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/lyra-terraspace/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://uio-lyra.github.io/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GHOST Mission by Lyra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
