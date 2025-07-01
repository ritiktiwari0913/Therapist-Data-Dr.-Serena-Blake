import { ArrowRight, Calendar, DollarSign } from "lucide-react";
import anxietyImage from "@assets/image_1751147945268.png";
import relationshipImage from "@assets/image_1751147561641.png";

export default function Services() {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description:
        "Learn to manage overthinking, panic, and daily overwhelm using CBT and mindfulness techniques for lasting relief.",
      image: anxietyImage,
      color: "text-primary",
    },
    {
      title: "Relationship Counseling",
      description:
        "Improve communication, rebuild trust, and develop deeper connections with your partner through proven therapeutic methods.",
      image: relationshipImage,
      color: "text-secondary",
    },
    {
      title: "Trauma Recovery",
      description:
        "Heal from emotional wounds and build resilience with compassionate, evidence-based care in a safe therapeutic environment.",
      image:
        "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500",
      color: "text-accent",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Services
            </span>
            <div className="w-12 h-1 bg-gradient-to-r from-secondary to-primary rounded-full" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-light text-neutral-800 mb-6">
            Specialized <span className="font-semibold text-primary">Therapy Services</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Evidence-based therapeutic approaches tailored to your unique needs and goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-white bg-gradient-to-br from-blue-50 to-blue-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-neutral-50 p-8 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className={`flex items-center justify-center ${service.color}`}>
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Office Hours & Pricing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border border-primary/10">
            <h3 className="text-xl font-semibold text-neutral-800 mb-6 flex items-center">
              <Calendar className="text-primary mr-3 h-5 w-5" />
              Office Hours
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">In-person sessions:</span>
                <span className="font-medium text-neutral-800">Tue & Thu, 10 AM–6 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Virtual sessions:</span>
                <span className="font-medium text-neutral-800">Mon, Wed & Fri, 1 PM–5 PM</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-accent/5 to-amber-100/20 p-8 rounded-2xl border border-accent/10">
            <h3 className="text-xl font-semibold text-neutral-800 mb-6 flex items-center">
              <DollarSign className="text-accent mr-3 h-5 w-5" />
              Session Fees
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Individual session:</span>
                <span className="font-semibold text-2xl text-accent">$200</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Couples session:</span>
                <span className="font-semibold text-2xl text-accent">$240</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
