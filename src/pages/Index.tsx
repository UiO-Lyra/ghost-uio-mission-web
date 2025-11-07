import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket, Satellite, Users, Target } from "lucide-react";
import heroImage from "@/assets/hero-rocket-launch.jpg";
import satelliteImage from "@/assets/munir-3-satellite.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-space-darker/80 via-space-darker/60 to-background" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in">
            GHOST Mission
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Student-led atmospheric research using sounding rocket technology
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            University of Oslo • MUNIR-3 Satellite • NASA Collaboration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/mission">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
            <Link to="/team">
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
                Join the Team
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-primary-foreground rounded-full" />
          </div>
        </div>
      </section>

      {/* Mission Overview */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advancing atmospheric science through innovative student-led research at the University of Oslo
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">About GHOST</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The GHOST (Geospace High-altitude Observation Satellite Technology) mission is a student-driven initiative focused on atmospheric plasma research. Working in collaboration with NASA, our team is developing and launching MUNIR-3, a sophisticated CubeSat designed to study ionospheric phenomena.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Launching from Andøya Space Center in northern Norway, GHOST provides invaluable hands-on experience for students while contributing meaningful data to atmospheric science research.
              </p>
              <Link to="/mission">
                <Button variant="outline">Read More About Our Mission</Button>
              </Link>
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
              <Satellite className="h-12 w-12 text-primary mb-4" />
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

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-space-darker">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Involved</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our team of passionate students working on cutting-edge space technology. No prior experience required—just enthusiasm and a willingness to learn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/team">
              <Button size="lg" className="w-full sm:w-auto">
                Meet the Team
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
