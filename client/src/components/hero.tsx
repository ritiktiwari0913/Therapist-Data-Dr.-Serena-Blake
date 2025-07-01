import { Button } from "@/components/ui/button";
import { Phone, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1333')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
          Compassionate Therapy for Your{" "}
          <span className="font-semibold text-accent">Healing Journey</span>
        </h1>
        <p className="text-xl sm:text-2xl font-light mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Helping you find clarity, connection, and peace of mind.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToContact}
            className="bg-accent hover:bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book a Free Consult
          </Button>
          <div className="flex items-center text-white/80 text-sm">
            <Phone className="mr-2 h-4 w-4" />
            <span>+91-9156448220</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
