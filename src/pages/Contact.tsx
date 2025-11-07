import { Mail, MapPin, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 bg-gradient-to-b from-space-darker to-background">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Get in touch with the GHOST mission team
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="p-8 bg-card border-border">
              <Mail className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Email</h3>
              <p className="text-muted-foreground mb-4">
                For general inquiries, collaboration opportunities, or press requests:
              </p>
              <a
                href="mailto:ghost@uio.no"
                className="text-primary hover:text-primary-glow font-semibold transition-colors text-lg"
              >
                ghost@uio.no
              </a>
            </Card>

            <Card className="p-8 bg-card border-border">
              <MapPin className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Location</h3>
              <p className="text-muted-foreground mb-2">
                University of Oslo
              </p>
              <p className="text-muted-foreground mb-2">
                Department of Physics
              </p>
              <p className="text-muted-foreground">
                Blindern, Oslo, Norway
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-card border-border mb-12">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Join Our Team</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Are you a UiO student interested in space research? We welcome new team members from all academic backgrounds. Whether you're studying physics, engineering, computer science, or any related field, there are opportunities to contribute to the GHOST mission.
            </p>
            <div className="bg-background border border-border rounded-lg p-6">
              <h4 className="font-semibold mb-3">What We're Looking For</h4>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Motivated students eager to learn about space technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Team players who can collaborate across disciplines</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Problem solvers ready to tackle engineering challenges</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Communicators who can document and present their work</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Send us an email with your background and areas of interest to learn about current openings.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border">
            <h3 className="text-2xl font-semibold mb-4">Partnerships & Collaboration</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We're open to collaborations with other universities, research institutions, and industry partners. If your organization is interested in supporting student-led space missions or exploring partnership opportunities, we'd love to hear from you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background border border-border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Academic Collaboration</h4>
                <p className="text-sm text-muted-foreground">
                  Joint research projects and student exchanges
                </p>
              </div>
              <div className="bg-background border border-border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Industry Partnership</h4>
                <p className="text-sm text-muted-foreground">
                  Technology development and sponsorship opportunities
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
