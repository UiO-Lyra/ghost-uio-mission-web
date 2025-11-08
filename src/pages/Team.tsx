import { Users, GraduationCap, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import labWorkImage from "@/assets/lab-work.jpg";

const Team = () => {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 bg-gradient-to-b from-space-darker to-background">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Team</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Student-led innovation at the University of Oslo
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <img
                src={labWorkImage}
                alt="Students working on satellite components in the electronics lab"
                className="rounded-lg w-full h-auto shadow-2xl"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Student Leadership</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The GHOST mission is driven by passionate students from various disciplines at the University of Oslo. Our team brings together expertise in physics, engineering, computer science, and project management to create a truly interdisciplinary research effort.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Working on MUNIR-3 provides hands-on experience with real space hardware, from circuit board design to system integration. Team members gain invaluable skills that prepare them for careers in the space industry and scientific research.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card border-border">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Team Structure</h3>
              <p className="text-muted-foreground mb-4">
                Our mission is organized into specialized subsystem teams:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Electronics & Power</li>
                <li>• Structure & Thermal</li>
                <li>• Software & Data</li>
                <li>• Communications</li>
                <li>• Science Instruments</li>
              </ul>
            </Card>

            <Card className="p-6 bg-card border-border">
              <GraduationCap className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Academic Programs</h3>
              <p className="text-muted-foreground mb-4">
                Team members come from:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Physics (B.Sc & M.Sc)</li>
                <li>• Engineering Physics</li>
                <li>• Computer Science</li>
                <li>• Electronics Engineering</li>
                <li>• Astrophysics</li>
              </ul>
            </Card>

            <Card className="p-6 bg-card border-border">
              <Building2 className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Collaborating Departments</h3>
              <p className="text-muted-foreground mb-4">
                Institutional support from:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Department of Physics</li>
                <li>• Department of Technology Systems</li>
                <li>• Institute of Theoretical Astrophysics</li>
                <li>• UiO Space Group</li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 mb-12 bg-card border-border">
            <h3 className="text-2xl font-semibold mb-6">What Our Team Does</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-lg">Technical Work</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Design and fabricate electronic systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Develop flight software and ground station code</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Conduct environmental testing and validation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Integrate scientific instruments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Analyze mission data and publish results</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-lg">Project Management</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Coordinate subsystem development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Manage project timeline and milestones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Liaise with NASA and Andøya Space</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Document design and procedures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Present at conferences and workshops</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border">
            <h3 className="text-2xl font-semibold mb-4">Join the Team</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We're always looking for motivated students to join the GHOST mission. Whether you're interested in hardware design, software development, scientific research, or project coordination, there's a place for you on our team. No prior space experience is required—just enthusiasm and a willingness to learn!
            </p>
            <div className="bg-background border border-border rounded-lg p-6">
              <h4 className="font-semibold mb-3">How to Get Involved</h4>
              <p className="text-muted-foreground mb-4">
                Interested students should reach out via email to learn about current opportunities and upcoming recruitment. We hold regular team meetings and welcome visitors to our lab facilities.
              </p>
              <a
                href="mailto:lyra@terraspace.no"
                className="text-primary hover:text-primary-glow font-semibold transition-colors"
              >
                Contact us at lyra@terraspace.no
              </a>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Team;
