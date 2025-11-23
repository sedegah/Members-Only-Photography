import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Services Header */}
      <section className="py-16 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Photography Packages</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">*Per event</p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pb-20">
        <div className="container mx-auto space-y-20">
          {/* Plans */}
          {[
            {
              title: "Basic Plan",
              price: "GHS 400/event",
              description:
                "Our Basic Plan is perfect for small business owners looking for an affordable option to expand their online presence without pressure.",
              image: "https://ext.same-assets.com/2524461974/387939469.jpeg",
            },
            {
              title: "Premium Plan",
              price: "GHS 750/event",
              description:
                "Upgrade to the Premium Plan for unlimited storage, 24/7 support, and monthly consultations with our specialists. Includes all perks from previous plans.",
              image: "https://ext.same-assets.com/2524461974/1373757782.jpeg",
            },
            {
              title: "Creative Plan",
              price: "GHS 600/event",
              description:
                "The Creative Plan is our most popular plan! Helps small to medium companies get an extra boost. Includes all perks from the Basic Plan.",
              image: "https://ext.same-assets.com/2524461974/414707290.jpeg",
            },
          ].map((plan, idx) => (
            <div
              key={plan.title}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold">{plan.title}</h2>
                <p className="text-pink-600 dark:text-pink-400 font-medium">{plan.price}</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{plan.description}</p>
                <Link href="/contact">
                  <Button className="bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white w-fit transition-colors">
                    Get A Quote
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Have A Question Section */}
      <section className="py-16 bg-pink-50 dark:bg-pink-900 transition-colors duration-300">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Have A Question?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Contact us today for answers to all your questions. Fill in the blanks with your content. 
              We're here to provide guidance, suggestions, and personalized plans tailored to your needs.
            </p>
            <Link href="/contact">
              <Button className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-white transition-colors">
                Contact Us
              </Button>
            </Link>
          </div>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://ext.same-assets.com/2524461974/387939469.jpeg"
              alt="Contact Illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-12 text-center bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Ready to book your photoshoot?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Choose your package today and let us capture your moments beautifully.
          </p>
          <Link href="/contact">
            <Button className="bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white w-fit transition-colors">
              Book Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
