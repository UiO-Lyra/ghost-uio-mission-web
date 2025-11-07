import { Rocket } from "lucide-react";
import { Link } from "react-router-dom";

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
                <Link to="/mission" className="hover:text-primary transition-colors">
                  About the Mission
                </Link>
              </li>
              <li>
                <Link to="/satellite" className="hover:text-primary transition-colors">
                  MUNIR-3 Satellite
                </Link>
              </li>
              <li>
                <Link to="/launch" className="hover:text-primary transition-colors">
                  Launch Campaign
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-primary transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-sm text-muted-foreground mb-2">University of Oslo</p>
            <a
              href="mailto:ghost@uio.no"
              className="text-sm text-primary hover:text-primary-glow transition-colors"
            >
              ghost@uio.no
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GHOST Mission, University of Oslo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
