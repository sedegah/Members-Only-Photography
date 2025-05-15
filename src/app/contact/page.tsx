"use client";

import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would normally send the data to a server
    alert("Thank you for your message! We will get back to you shortly.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Contact Header */}
      <section className="py-16 text-center bg-black text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-medium mb-4">Sign Up & Get A Quote</h1>
          <p>Let us know if there is anything we can do for you</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-medium mb-4">Contact Form</h2>
          <p className="text-gray-600 mb-6">
            Please fill out the form provided below and we will respond to your inquiry shortly. Thank you!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium">
                  First Name
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium">
                  Last Name*
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email*
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message*
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-500">
                Create your free online form with{" "}
                <a
                  href="https://website.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Website.com
                </a>
              </p>

              <Button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white rounded-full"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Find Us */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-medium mb-8">Find Us</h2>

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-2">Location</h3>
                <p>GM 043 8877</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Contact</h3>
                <p>Tel: (+233) 551307929</p>
                <p className="ml-8">(+233) 207081056</p>
                <p>Email: info@membersonlyphotography.com</p>
              </div>
            </div>

            <div className="relative h-[300px] rounded-md overflow-hidden">
              <Image
                src="https://ext.same-assets.com/483571973/2043349370.png"
                alt="Google Map"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
