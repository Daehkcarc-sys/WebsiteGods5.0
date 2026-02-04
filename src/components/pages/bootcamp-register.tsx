import { Sparkles } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeBWJuFjX9OrXK5-t327rKQ2MjM00DoyKsCcAvJfFSLevTagg/formResponse";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(6, "Phone number is required"),
});

type BootcampFormValues = z.infer<typeof formSchema>;

function BootcampRegister() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<BootcampFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (values: BootcampFormValues) => {
    const formData = new FormData();
    formData.append("entry.2037326565", values.fullName);
    formData.append("entry.983991430", values.email);
    formData.append("entry.1133510550", values.phone);

    try {
      await fetch(FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      setIsSubmitted(true);
      form.reset();
    } catch {
      // no-cors won't expose errors; keep UX simple
      setIsSubmitted(true);
      form.reset();
    }
  };

  return (
    <main
      ref={mainRef}
      className="min-h-screen bg-background pt-28 sm:pt-32 lg:pt-36 pb-16 px-4 sm:px-6"
    >
      <section className="max-w-4xl mx-auto">
        <header className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              <span className="text-primary">GODS</span>{" "}
              <span className="text-foreground">Bootcamp</span>
            </h1>
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Register now for the GODS 5.0 Bootcamp. Fill in your Full Name, Email Address, and Phone Number below.
          </p>
        </header>

        <Card className="shadow-xl">
          <CardHeader className="pb-4 sm:pb-6">
            <CardTitle className="text-xl sm:text-2xl">Bootcamp Registration</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Complete the form below. Your responses will be saved to our Google Sheet.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="text-center py-8">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Registration received!
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Thanks for registering for the GODS 5.0 Bootcamp. We’ll contact you soon.
                </p>
                <Button
                  variant="outline"
                  className="mt-6 rounded-xl"
                  onClick={() => setIsSubmitted(false)}
                >
                  Submit another response
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">Full Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your full name"
                            className="h-10 sm:h-12 rounded-xl text-sm sm:text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">Email Address *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="email@example.com"
                            className="h-10 sm:h-12 rounded-xl text-sm sm:text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">Phone Number *</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+216 XX XXX XXX"
                            className="h-10 sm:h-12 rounded-xl text-sm sm:text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-center">
                    <Button type="submit" className="rounded-xl px-6 py-2.5">
                      Register for Bootcamp
                    </Button>
                  </div>
                </form>
              </Form>
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

export default BootcampRegister;
