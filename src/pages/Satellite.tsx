import { Cpu, Radio, Shield, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import munir3Image from "@/assets/munir-3-satellite.jpg";

const Satellite = () => {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 bg-gradient-to-b from-space-darker to-background">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">MUNIR-3 Satellite</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Our advanced payload for atmospheric research
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <img
                src={munir3Image}
                alt="MUNIR-3 Satellite render in orbit"
                className="rounded-lg w-full h-auto shadow-2xl"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Mission Payload</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                MUNIR-3 is a sophisticated CubeSat-class satellite designed and built by students at the University of Oslo. The satellite serves as the primary payload for the GHOST mission, carrying advanced scientific instruments to study atmospheric plasma and ionospheric phenomena.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Type</p>
                  <p className="font-semibold">CubeSat 3U</p>
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
            </div>
          </div>

          <Tabs defaultValue="instruments" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="instruments">Instruments</TabsTrigger>
              <TabsTrigger value="electronics">Electronics</TabsTrigger>
              <TabsTrigger value="structure">Structure</TabsTrigger>
              <TabsTrigger value="communication">Communication</TabsTrigger>
            </TabsList>

            <TabsContent value="instruments" className="space-y-4">
              <Card className="p-6 bg-card border-border">
                <Zap className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Scientific Instruments</h3>
                <p className="text-muted-foreground mb-4">
                  MUNIR-3 carries a suite of scientific instruments designed to measure atmospheric plasma properties:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Langmuir Probe:</strong> Measures electron density and temperature in the ionosphere</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Magnetometer:</strong> Records magnetic field variations during flight</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong>GNSS Receiver:</strong> Provides precise positioning and timing data</span>
                  </li>
                </ul>
              </Card>
            </TabsContent>

            <TabsContent value="electronics" className="space-y-4">
              <Card className="p-6 bg-card border-border">
                <Cpu className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Electronics & Computing</h3>
                <p className="text-muted-foreground mb-4">
                  The electronics subsystem provides processing power, data storage, and system control:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Flight Computer:</strong> ARM-based processor running real-time operating system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Power Management:</strong> Intelligent battery charging and power distribution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Data Storage:</strong> Redundant flash memory for mission data</span>
                  </li>
                </ul>
              </Card>
            </TabsContent>

            <TabsContent value="structure" className="space-y-4">
              <Card className="p-6 bg-card border-border">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Structural Design</h3>
                <p className="text-muted-foreground mb-4">
                  MUNIR-3's structure is engineered to withstand the harsh conditions of rocket launch and space:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Aluminum Frame:</strong> Lightweight yet robust 3U CubeSat chassis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Thermal Management:</strong> Passive thermal control for stable operation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Solar Panels:</strong> Deployable panels for power generation</span>
                  </li>
                </ul>
              </Card>
            </TabsContent>

            <TabsContent value="communication" className="space-y-4">
              <Card className="p-6 bg-card border-border">
                <Radio className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Communication System</h3>
                <p className="text-muted-foreground mb-4">
                  Reliable communication is essential for mission success and data recovery:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong>UHF/VHF Radio:</strong> Primary telemetry and command link</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Patch Antennas:</strong> Omnidirectional coverage for reliable downlink</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Ground Station:</strong> UiO-based receiving station for data collection</span>
                  </li>
                </ul>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="mt-12 p-8 bg-card border-border">
            <h3 className="text-2xl font-semibold mb-4">Engineering Challenges</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Developing MUNIR-3 has presented numerous engineering challenges for our student team. From designing radiation-hardened electronics to ensuring structural integrity during launch, every aspect has been carefully considered and tested. The project has provided invaluable hands-on experience in systems engineering, integration testing, and troubleshooting.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-background border border-border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Vibration Testing</h4>
                <p className="text-sm text-muted-foreground">Ensuring survival of launch loads</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Thermal Cycling</h4>
                <p className="text-sm text-muted-foreground">Testing extreme temperature ranges</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-4">
                <h4 className="font-semibold mb-2">EMC Testing</h4>
                <p className="text-sm text-muted-foreground">Electromagnetic compatibility verification</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Satellite;
