import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const PUBLIC_FORM_URL = "https://forms.gle/D1MLp96WdKrnPi2z5";

const REGISTRATION_UNLOCK_AT = new Date("2026-02-05T20:00:00+01:00");

function EventRegister() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    const unlockTime = REGISTRATION_UNLOCK_AT.getTime();
    const updateLock = () => setIsLocked(Date.now() < unlockTime);

    updateLock();
    const delay = Math.max(0, unlockTime - Date.now());
    const timer = window.setTimeout(() => setIsLocked(false), delay);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    isLocked ? (
      <main ref={mainRef} className="min-h-screen bg-background pt-28 sm:pt-32 lg:pt-36 pb-16 px-4 sm:px-6 mb-5">
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 -left-32 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-64 sm:w-96 h-64 sm:h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
        <section className="max-w-4xl mx-auto relative z-10">
          <header className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                <span className="text-primary">GODS</span>{" "}
                <span className="text-foreground">5.0</span>
              </h1>
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Event Registration
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Registration opens tomorrow. Please check back soon.
            </p>
          </header>
        </section>
      </main>
    ) : (
    <main ref={mainRef} className="min-h-screen bg-background pt-28 sm:pt-32 lg:pt-36 pb-16 px-4 sm:px-6 mb-5">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 -left-32 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 sm:w-96 h-64 sm:h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <section className="max-w-4xl mx-auto relative z-10">
        <header className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              <span className="text-primary">GODS</span>{" "}
              <span className="text-foreground">5.0</span>
            </h1>
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
            Event Registration
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Complete the form below. Your responses are recorded directly in our Google Sheet.
          </p>
        </header>

        <Card className="shadow-xl">
          <CardHeader className="pb-4 sm:pb-6">
            <CardTitle className="text-xl sm:text-2xl">Registration Form</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Use the official Google Form to complete your registration.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-4 py-6">
              <p className="text-sm sm:text-base text-muted-foreground text-center">
                Click below to open the registration form.
              </p>
              <a
                href={PUBLIC_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-6 py-2.5 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors duration-300"
              >
                Open Registration Form
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
    )
  );
}

export default EventRegister;
