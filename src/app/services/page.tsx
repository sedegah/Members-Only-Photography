import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Services Header */}
      <section className="py-16 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-medium mb-4">Our Photography Packages</h1>
          <p className="text-gray-600">*Per event</p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pb-20">
        <div className="container mx-auto">
          {/* Basic Plan */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="https://ext.same-assets.com/2524461974/387939469.jpeg"
                alt="Basic Plan"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-medium mb-2">Basic Plan</h2>
              <p className="text-gray-600 mb-4">Starting at GHS 400/event</p>
              <p className="text-gray-700 mb-6">
                Our Basic Plan is perfect for small business owners who are looking for an affordable
                option to get started on expanding their online presence without the commitment and
                pressure.
              </p>
              <Link href="/contact">
                <Button className="bg-pink-600 hover:bg-pink-700 text-white w-fit">
                  Get A Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="https://ext.same-assets.com/2524461974/1373757782.jpeg"
                alt="Premium Plan"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-medium mb-2">Premium Plan</h2>
              <p className="text-gray-600 mb-4">Starting at GHS 750/event</p>
              <p className="text-gray-700 mb-6">
                Upgrade to the Premium Plan for unlimited storage, 24/7 support, and monthly
                consultations with our specialists. Also includes all the amazing perks from all previous
                Plans.
              </p>
              <Link href="/contact">
                <Button className="bg-pink-600 hover:bg-pink-700 text-white w-fit">
                  Get A Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Creative Plan */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="https://ext.same-assets.com/2524461974/414707290.jpeg"
                alt="Creative Plan"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-medium mb-2">Creative Plan</h2>
              <p className="text-gray-600 mb-4">Starting at GHS 600/event</p>
              <p className="text-gray-700 mb-6">
                The Creative Plan is our most popular plan (and with good reason)! We help small to
                medium sized companies get an extra boost. Also includes all the amazing perks from the
                Basic Plan.
              </p>
              <Link href="/contact">
                <Button className="bg-pink-600 hover:bg-pink-700 text-white w-fit">
                  Get A Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Have A Question Section */}
      <section className="py-16 bg-pink-light">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-medium mb-4">Have A Question?</h2>
          </div>
          <div>
            <p className="text-gray-700 mb-6">
              Contact us today for answers to all your questions. This is a paragraph. You can
              write your own content here, and fill in the blanks.
            </p>
            <Link href="/contact">
              <Button className="bg-white border border-gray-300 hover:bg-gray-100 text-black">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
