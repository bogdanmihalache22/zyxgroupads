"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import HeroBanner from "@/components/HeroBanner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    company: "",
    budget: "",
    existingAdvertiser: "",
    message: "",
    signUpForEmails: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert("Thank you for your submission! We'll get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <>
      <Header />
      <main className="w-full pb-16">
        <HeroBanner heading="Get In Touch" text="" bgColor="bg-[#f5f5f5]" headingClassName="text-[96px] leading-[1] text-left" />
        <style>{`.contact-banner-bg { background-color: #f5f5f5 !important; }`}</style>
        <div className="-mt-[32rem] pb-16 pointer-events-none">
          {/* overlays the HeroBanner with the correct bg -- hack since HeroBanner itself uses yellow*/}
          <div className="w-screen h-[32rem] contact-banner-bg"></div>
        </div>
        <div className="max-w-3xl mx-auto mt-10">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Name and Last Name side by side */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label htmlFor="name" className="block text-lg font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="First Name*"
                  className="w-full px-0 py-3 border-0 border-b border-gray-400 focus:outline-none focus:ring-0 focus:border-b-2 focus:border-primary bg-transparent"
                />
              </div>
              <div className="w-1/2 flex items-end pt-6">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Last Name*"
                  className="w-full px-0 py-3 border-0 border-b border-gray-400 focus:outline-none focus:ring-0 focus:border-b-2 focus:border-primary bg-transparent placeholder-gray-400"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email*"
                className="w-full px-0 py-3 border-0 border-b border-gray-400 focus:outline-none focus:ring-0 focus:border-b-2 focus:border-primary bg-transparent"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-lg font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder="Company*"
                className="w-full px-0 py-3 border-0 border-b border-gray-400 focus:outline-none focus:ring-0 focus:border-b-2 focus:border-primary bg-transparent"
              />
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="budget" className="block text-lg font-medium mb-2">
                Budget (USD)
              </label>
              <input
                type="text"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="Budget (USD)*"
                required
                className="w-full px-0 py-3 border-0 border-b border-gray-400 focus:outline-none focus:ring-0 focus:border-b-2 focus:border-primary bg-transparent"
              />
            </div>

            {/* Existing Advertiser */}
            <div>
              <label htmlFor="existingAdvertiser" className="block text-lg font-medium mb-2">
                Existing Advertiser <span className="text-red-500">*</span>
              </label>
              <select
                id="existingAdvertiser"
                name="existingAdvertiser"
                value={formData.existingAdvertiser}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 border-0 border-b border-gray-400 focus:outline-none focus:ring-0 focus:border-b-2 focus:border-primary bg-transparent"
              >
                <option value="">Select existing advertiser*</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                placeholder="Type a message here. (required)"
                className="w-full px-4 py-3 bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-primary rounded-none border-0 resize-y"
              />
            </div>

            

            {/* Submit Button */}
            <div className="pt-4">
              <Button type="submit" size="lg" className="w-full md:w-auto px-12">
                Submit Form
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

