import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[700px]">
        <Image
          src="https://ext.same-assets.com/1974940630/3200344728.jpeg"
          alt="Beach scene"
          fill
          className="object-cover"
          priority
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-3xl md:text-5xl font-medium mb-4 md:mb-6">Make It Stand Out</h1>
          <p className="max-w-2xl text-base md:text-lg mb-4 md:mb-8 px-4">
            A collaborative platform for all your needs. Learn how to optimize your team's output to maximize your work.
          </p>
          <p className="max-w-2xl text-base md:text-lg mb-8 md:mb-12 px-4">
            Using strategies with proven results, we can help boost your business and branding. Begin your journey today
            and bring your ideas to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-white text-black hover:bg-gray-100 border border-white">
              Get Started
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-medium mb-4">Welcome to Members Only Photography</h2>
            <div className="mb-6">
              <h3 className="text-gray-600 uppercase text-sm font-semibold tracking-wider mb-4">LEARN MORE ABOUT WHAT WE DO</h3>
              <p className="text-gray-700 mb-6">
                Founded in June 2023, Members Only Photography was created to offer a simpler solution for
                small businesses to improve their online presence through collaborative teamwork, web
                optimizing strategies, and community support. This is a paragraph. You can write your own
                content here, and fill in the blanks. What's your story and where do you go from here? Tell the
                world about your business, and make this text yours. This is a paragraph.
              </p>
              <Link href="/services">
                <Button className="bg-pink-600 hover:bg-pink-700 text-white w-full sm:w-auto">See Our Pricing</Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="https://ext.same-assets.com/1974940630/1771750126.jpeg"
              alt="Beach view"
              fill
              className="object-cover rounded-md"
              crossOrigin="anonymous"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
