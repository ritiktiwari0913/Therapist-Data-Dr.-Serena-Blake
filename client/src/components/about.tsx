import { MapPin, Phone, Mail } from "lucide-react";
import drSerenaImage from "@assets/image_1751148320945.png";

export default function About() {
  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={drSerenaImage}
              alt="Dr. Serena Blake, PsyD - Licensed Clinical Psychologist"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover h-96 lg:h-auto"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                About Dr. Blake
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-neutral-800 mb-6 leading-tight">
              Licensed Clinical Psychologist committed to{" "}
              <span className="font-semibold text-secondary">your wellbeing</span>
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los
              Angeles, CA, with eight years of experience and over 500 client sessions.
              She blends evidence-based approaches—like cognitive-behavioral therapy and
              mindfulness—with compassionate, personalized care to help you overcome
              anxiety, strengthen relationships, and heal from trauma.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              Whether you meet in her Maplewood Drive office or connect virtually via
              Zoom, Dr. Blake is committed to creating a safe, supportive space for your
              healing journey.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white px-6 py-3 rounded-full shadow-md border border-neutral-200">
                <span className="font-semibold text-primary">8 Years</span>
                <span className="text-neutral-600 ml-2">Experience</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-md border border-neutral-200">
                <span className="font-semibold text-secondary">500+</span>
                <span className="text-neutral-600 ml-2">Sessions</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-md border border-neutral-200">
                <span className="font-semibold text-accent">Top</span>
                <span className="text-neutral-600 ml-2">Rated</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-800 mb-3">Contact Information</h3>
              <div className="space-y-2 text-neutral-600">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary mr-3" />
                  <span>1303, pune camp , Maharashtra , pin code 411001</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-3" />
                  <span>+91-9156448220</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-3" />
                  <span>serena@blakepsychology.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
