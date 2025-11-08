import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket, Satellite as SatelliteIcon, Users, Target, Zap, MapPin, Calendar, CheckCircle2, Instagram, Linkedin, Facebook } from "lucide-react";
import heroImage from "@/assets/hero-rocket-launch.jpg";
import satelliteImage from "@/assets/munir-3-satellite.jpg";
import andoyaImage from "@/assets/andoya-facility.jpg";
import labWorkImage from "@/assets/lab-work.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-space-darker/85 via-space-darker/70 to-background" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            GHOST Mission
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-6 max-w-3xl mx-auto">
            A student-led space mission from the University of Oslo
          </p>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
            Lyra is a nonprofit of volunteer innovators who choose hard problems and build across disciplines—delivering fierce innovation against the odds. Together we are designing, building, and launching the MUNIR‑3 payload in collaboration with NASA and Andøya Space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#mission">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                About the Mission
              </Button>
            </a>
            <a href="#join">
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
                Join the Team
              </Button>
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#mission" aria-label="Scroll to mission section">
            <div className="w-6 h-10 border-2 border-primary-foreground/80 rounded-full flex justify-center p-2">
              <div className="w-1 h-3 bg-primary-foreground/80 rounded-full" />
            </div>
          </a>
        </div>
      </section>

      {/* Mission Overview */}
      <section id="mission" className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advancing atmospheric science through a student-built payload and sounding rocket campaign.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">About GHOST</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                GHOST—Geospace High‑altitude Observation Satellite Technology—is a University of Oslo student initiative focused on atmospheric plasma research. In collaboration with NASA, our volunteer team is developing and launching MUNIR‑3 to study the ionosphere during a sounding rocket flight from Andøya.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The mission provides real, hands‑on experience while contributing meaningful data to science—proof that the next generation can build ambitious space systems together.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Focus</p>
                  <p className="font-semibold">Ionospheric plasma</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Collaboration</p>
                  <p className="font-semibold">NASA • Andøya Space</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src={satelliteImage}
                alt="MUNIR-3 satellite in orbit above Earth"
                className="rounded-lg w-full h-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-background border-border hover:border-primary transition-colors">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Scientific Research</h3>
              <p className="text-muted-foreground">
                Studying atmospheric plasma and ionospheric phenomena through advanced instrumentation
              </p>
            </Card>

            <Card className="p-6 bg-background border-border hover:border-primary transition-colors">
              <SatelliteIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">MUNIR-3 Payload</h3>
              <p className="text-muted-foreground">
                Student-designed and built CubeSat carrying sophisticated scientific instruments
              </p>
            </Card>

            <Card className="p-6 bg-background border-border hover:border-primary transition-colors">
              <Rocket className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Launch Campaign</h3>
              <p className="text-muted-foreground">
                Sounding rocket launch from Andøya Space Center in collaboration with NASA
              </p>
            </Card>

            <Card className="p-6 bg-background border-border hover:border-primary transition-colors">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Student Leadership</h3>
              <p className="text-muted-foreground">
                Entirely student-led project providing hands-on space technology experience
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology / MUNIR-3 */}
      <section id="technology" className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">MUNIR‑3 Payload</h2>
            <p className="text-xl text-muted-foreground">Our compact, capable platform for ionospheric science</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img src={satelliteImage} alt="MUNIR-3 render" className="rounded-lg w-full h-auto shadow-2xl" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Type</p>
                  <p className="font-semibold">3U CubeSat</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Mass</p>
                  <p className="font-semibold">~4.5 kg</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Power</p>
                  <p className="font-semibold">Solar + Battery</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Launch</p>
                  <p className="font-semibold">Sounding Rocket</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-3"><Zap className="h-6 w-6 text-primary"/>Instruments</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Langmuir probe for electron density & temperature</li>
                  <li>• Magnetometer for magnetic field variations</li>
                  <li>• GNSS receiver for precise timing & position</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Launch */}
      <section id="launch" className="py-24 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Launch Campaign</h2>
              <p className="text-muted-foreground mb-6">Preparing for launch at Andøya Space Center in northern Norway—one of the world’s premier locations for auroral and ionospheric research.</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-background border border-border rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-semibold flex items-center gap-2"><MapPin className="h-4 w-4 text-primary"/>69.3°N, 16.0°E</p>
                </div>
                <div className="bg-background border border-border rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Window</p>
                  <p className="font-semibold flex items-center gap-2"><Calendar className="h-4 w-4 text-primary"/>2025 (target)</p>
                </div>
              </div>
              <Card className="p-6 bg-background border-border">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2"><Calendar className="h-5 w-5 text-primary"/>Mission Timeline</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary"/>Design & development</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary"/>Integration & testing</div>
                  <div className="flex items-center gap-2"><div className="h-4 w-4 rounded-full border-2 border-primary"/>Launch prep</div>
                  <div className="flex items-center gap-2"><div className="h-4 w-4 rounded-full border-2 border-muted"/>Launch & operations</div>
                </div>
              </Card>
            </div>
            <div>
              <img src={andoyaImage} alt="Andøya Space Center" className="rounded-lg w-full h-auto shadow-2xl"/>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <img src={labWorkImage} alt="Students working in the lab" className="rounded-lg w-full h-auto shadow-2xl" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">An Interdisciplinary Team</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Lyra is a nonprofit of brilliant minds at UiO working voluntarily—building across physics, engineering, and computer science to deliver a mission larger than ourselves.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4 bg-card border-border">
                  <h3 className="font-semibold mb-2">Subsystems</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Electronics & Power</li>
                    <li>• Structure & Thermal</li>
                    <li>• Software & Data</li>
                    <li>• Communications</li>
                    <li>• Science Instruments</li>
                  </ul>
                </Card>
                <Card className="p-4 bg-card border-border">
                  <h3 className="font-semibold mb-2">Programs</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Physics & Astrophysics</li>
                    <li>• Engineering Physics</li>
                    <li>• Electronics</li>
                    <li>• Computer Science</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section id="join" className="py-24 px-4 bg-gradient-to-b from-background to-space-darker">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Mission</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We’re a volunteer, student-led organization. No prior space experience required—just drive, curiosity, and commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#team">
              <Button size="lg" className="w-full sm:w-auto">Meet the Team</Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">Contact Us</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-semibold mb-3">Email</h3>
              <p className="text-muted-foreground mb-4">For inquiries, collaboration, or press:</p>
              <a href="mailto:lyra@terraspace.no" className="text-primary hover:text-primary-glow font-semibold transition-colors text-lg">
                lyra@terraspace.no
              </a>
            </Card>
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-semibold mb-3">Location</h3>
              <p className="text-muted-foreground">Lyra</p>
              <p className="text-muted-foreground">Sem Sælands vei 24, UiO</p>
              <p className="text-muted-foreground">0371 Oslo</p>
            </Card>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Follow:</span>
            <a href="https://www.instagram.com/lyra.terraspace/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/lyra-terraspace/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://uio-lyra.github.io/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
