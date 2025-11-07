import { Rocket, Target, Users, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const Mission = () => {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 bg-gradient-to-b from-space-darker to-background">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About the Mission</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Understanding Earth's atmosphere through innovative student-led research
          </p>

          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg leading-relaxed text-muted-foreground">
              The GHOST (Geospace High-altitude Observation Satellite Technology) mission represents a unique collaboration between the University of Oslo and NASA, focusing on atmospheric plasma research using advanced sounding rocket technology. Our mission aims to collect critical data about the Earth's upper atmosphere and ionosphere during launch campaigns at Andøya Space Center in northern Norway.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 bg-card border-border">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mission Objectives</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Study atmospheric plasma dynamics</li>
                <li>• Test novel satellite instrumentation</li>
                <li>• Collect ionospheric data</li>
                <li>• Advance student research capabilities</li>
              </ul>
            </Card>

            <Card className="p-6 bg-card border-border">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Scientific Impact</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Contribute to atmospheric science</li>
                <li>• Support space weather research</li>
                <li>• Enable cross-disciplinary collaboration</li>
                <li>• Train next-gen space scientists</li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-card border-border">
            <div className="flex items-start gap-4">
              <Rocket className="h-12 w-12 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-4">NASA Collaboration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our partnership with NASA provides invaluable expertise and resources for the GHOST mission. Through joint launch campaigns at Andøya Space Center, we gain access to world-class facilities and research opportunities. This collaboration enables our students to work alongside experienced professionals and contribute to cutting-edge atmospheric research.
                </p>
              </div>
            </div>
          </Card>

          <div className="mt-12 bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              Student Leadership
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The GHOST mission is primarily led by students from the University of Oslo, working across multiple departments including Physics, Engineering, and Computer Science. This hands-on approach provides invaluable experience in:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">Satellite design and engineering</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">Scientific instrumentation</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">Data analysis and interpretation</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">Project management and teamwork</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
