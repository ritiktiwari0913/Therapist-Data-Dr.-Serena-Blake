import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Shield, Send } from "lucide-react";
import therapySessionImage from "@assets/image_1751148699542.png";

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      contactTime: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message Sent Successfully!",
        description: "Dr. Blake will get back to you within 24 hours.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Contact
            </span>
            <div className="w-12 h-1 bg-gradient-to-r from-secondary to-primary rounded-full" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-light text-neutral-800 mb-6">
            Ready to Begin Your <span className="font-semibold text-secondary">Healing Journey?</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Take the first step towards positive change. Reach out today to schedule your free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-neutral-50 p-8 rounded-2xl shadow-lg">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                  Thank you for reaching out!
                </h3>
                <p className="text-neutral-600">
                  Dr. Blake will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-neutral-700">
                          Full Name *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your full name"
                            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
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
                        <FormLabel className="text-sm font-medium text-neutral-700">
                          Email Address *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
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
                        <FormLabel className="text-sm font-medium text-neutral-700">
                          Phone Number *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="(xxx) xxx-xxxx"
                            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-neutral-700">
                          What brings you here? *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            placeholder="Please share what you'd like to work on or any questions you have..."
                            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contactTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-neutral-700">
                          Preferred time to reach you
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Weekday mornings, Weekend afternoons"
                            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent"
                      required
                      className="w-5 h-5 text-primary bg-white border-neutral-300 rounded focus:ring-2 focus:ring-primary focus:ring-offset-0 transition-all duration-300 mt-1"
                    />
                    <Label
                      htmlFor="consent"
                      className="text-sm text-neutral-600 leading-relaxed cursor-pointer"
                    >
                      I agree to be contacted by Dr. Serena Blake regarding my inquiry and understand that this form is not for crisis situations. *
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full gradient-bg text-white py-4 px-6 rounded-xl font-medium text-lg hover:opacity-90 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border border-primary/10">
              <h3 className="text-xl font-semibold text-neutral-800 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800">Office Location</h4>
                    <p className="text-neutral-600">
                      1287 Maplewood Drive<br />
                      Los Angeles, CA 90026
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800">Phone</h4>
                    <p className="text-neutral-600">(323) 555-0192</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800">Email</h4>
                    <p className="text-neutral-600">serena@blakepsychology.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={therapySessionImage}
                alt="Therapy session illustration"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="bg-accent/5 p-6 rounded-2xl border border-accent/10">
              <div className="flex items-center mb-4">
                <Shield className="h-5 w-5 text-accent mr-3" />
                <h3 className="text-lg font-semibold text-neutral-800">Confidential & Secure</h3>
              </div>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Your privacy is my top priority. All communications are confidential and secured according to HIPAA standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
