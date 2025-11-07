import { MapPin, Calendar, Rocket, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import andoyaImage from "@/assets/andoya-facility.jpg";

const Launch = () => {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 bg-gradient-to-b from-space-darker to-background">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Launch Campaign</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Preparing for launch at Andøya Space Center
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <MapPin className="h-8 w-8 text-primary" />
                Andøya Space Center
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Located in northern Norway, Andøya Space Center provides ideal conditions for atmospheric research. The facility's proximity to the auroral zone makes it one of the premier locations for studying ionospheric phenomena.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 60 years of experience in sounding rocket launches, Andøya offers world-class infrastructure and expertise. The site has supported numerous international research campaigns and continues to be a hub for atmospheric science.
              </p>
              <div className="flex gap-4">
                <div className="bg-card border border-border rounded-lg p-4 flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-semibold">69.3°N, 16.0°E</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Altitude</p>
                  <p className="font-semibold">Sea Level</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src={andoyaImage}
                alt="Andøya Space Center launch facility in Norway"
                className="rounded-lg w-full h-auto shadow-2xl"
              />
            </div>
          </div>

          <Card className="p-8 mb-12 bg-card border-border">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Calendar className="h-8 w-8 text-primary" />
              Mission Timeline
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <div className="w-0.5 h-full bg-border mt-2" />
                </div>
                <div className="pb-6">
                  <h4 className="font-semibold mb-1">Phase 1: Design & Development</h4>
                  <p className="text-sm text-muted-foreground mb-2">2023 Q1-Q4</p>
                  <p className="text-muted-foreground">
                    Initial design, component selection, and preliminary testing of MUNIR-3 systems.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <div className="w-0.5 h-full bg-border mt-2" />
                </div>
                <div className="pb-6">
                  <h4 className="font-semibold mb-1">Phase 2: Integration & Testing</h4>
                  <p className="text-sm text-muted-foreground mb-2">2024 Q1-Q2</p>
                  <p className="text-muted-foreground">
                    Assembly of satellite components, environmental testing, and system verification.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-6 w-6 rounded-full border-2 border-primary bg-primary/20 flex items-center justify-center">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                  </div>
                  <div className="w-0.5 h-full bg-border mt-2" />
                </div>
                <div className="pb-6">
                  <h4 className="font-semibold mb-1">Phase 3: Launch Preparation</h4>
                  <p className="text-sm text-muted-foreground mb-2">2024 Q3-Q4</p>
                  <p className="text-muted-foreground">
                    Final testing, payload integration with sounding rocket, and pre-launch checks.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-6 w-6 rounded-full border-2 border-muted bg-background" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phase 4: Launch & Operations</h4>
                  <p className="text-sm text-muted-foreground mb-2">2025 Q1 (Target)</p>
                  <p className="text-muted-foreground">
                    Rocket launch from Andøya, data collection during flight, and post-mission analysis.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 bg-card border-border">
              <Rocket className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Launch Vehicle</h3>
              <p className="text-muted-foreground mb-4">
                MUNIR-3 will be launched aboard a two-stage sounding rocket, reaching altitudes of over 300 km. The rocket provides approximately 15 minutes of flight time, during which all scientific measurements are conducted.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Max Altitude</span>
                  <span className="font-semibold">~300 km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Flight Duration</span>
                  <span className="font-semibold">~15 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payload Mass</span>
                  <span className="font-semibold">~4.5 kg</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold mb-3">Mission Milestones</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Critical Design Review completed</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Environmental testing passed</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full border-2 border-primary flex-shrink-0 mt-0.5" />
                  <span>Final integration in progress</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full border-2 border-muted flex-shrink-0 mt-0.5" />
                  <span>Launch window selection pending</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-card border-border">
            <h3 className="text-2xl font-semibold mb-4">Campaign Details</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The GHOST launch campaign involves extensive coordination between our student team, Andøya Space Center staff, and NASA collaborators. Team members will spend several weeks at the facility for final preparations, conducting dress rehearsals, and monitoring weather conditions for optimal launch opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-background border border-border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Pre-Launch</h4>
                <p className="text-sm text-muted-foreground">2-3 weeks on-site preparation</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Launch Day</h4>
                <p className="text-sm text-muted-foreground">24-hour countdown operations</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Post-Flight</h4>
                <p className="text-sm text-muted-foreground">Data recovery and analysis</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Launch;
