import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const workshops = [
  {
    title: "Semantic Anomaly Detection with Vector Search",
    recordingUrl: "https://drive.google.com/file/d/16NU8EQFKUetNejHLVjLvm94K3-eOn8n0/view?usp=drive_link",
    codeUrl: "https://github.com/Goodnight77/My_Workshops/tree/main/GODS-Semantic-anomaly-detection-with-vector-search?fbclid=IwY2xjawP4c_tleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeGEUY1AIKAgYeiRZ6I43NXublpHiz18YvzDLR8vPGMCcDcW4pv1xgTn2T5lY_aem_qushZmgMQOLYUFzSqHKgDg",
  },
];

function WorkshopRecords() {
  return (
    <main className="min-h-screen bg-background pt-28 sm:pt-32 lg:pt-36 pb-16 px-4 sm:px-6 mb-5">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 -left-32 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 sm:w-96 h-64 sm:h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <section className="max-w-4xl mx-auto relative z-10">
        <header className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              <span className="text-primary">Bootcamp</span>{" "}
              <span className="text-foreground">Records</span>
            </h1>
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Access the recordings and code for completed workshops.
          </p>
        </header>

        <div className="space-y-6">
          {workshops.map((workshop) => (
            <Card key={workshop.title} className="shadow-xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl sm:text-2xl">{workshop.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Recording and code resources.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={workshop.recordingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors duration-300"
                  >
                    Watch Recording
                  </a>
                  <a
                    href={workshop.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 border border-primary/40 text-foreground font-semibold hover:border-primary/70 hover:text-primary transition-colors duration-300"
                  >
                    View Code
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

export default WorkshopRecords;
