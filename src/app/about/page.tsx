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
        <HeroBanner heading="About ZYX Group Ads" bgColor="bg-[#f5f5f5]" headingClassName="text-[96px] leading-[1] text-left" text={""} />
        <style>{`.contact-banner-bg { background-color: #f5f5f5 !important; }`}</style>
        <div className="-mt-[32rem] pb-16 pointer-events-none">
          <div className="w-screen h-[32rem] contact-banner-bg"></div>
        </div>
        <div className="max-w-3xl mx-auto mt-10">
            
        </div>
        <div className="max-w-3xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum, mauris sit amet blandit malesuada, magna leo dictum tellus, at porttitor quam dolor at nulla. Maecenas feugiat, velit vitae dictum luctus, nibh sapien cursus erat, nec facilisis orci magna nec ante. Fusce pharetra, leo nec fermentum tristique, augue lacus eleifend nulla, a accumsan turpis ipsum tincidunt nibh. Proin nec ultricies odio, vitae dictum ligula. Integer at metus et turpis convallis vehicula et id nulla. Phasellus placerat tempor lacus, id mattis libero scelerisque et. Donec posuere metus sit amet urna volutpat feugiat.
            </p>
            <ul className="list-disc ml-8 mb-2">
                <li>Vestibulum non cursus lorem, a dictum nisi.</li>
                <li>Integer in tincidunt nibh, nec faucibus nisi.</li>
                <li>Sed in convallis massa, a dictum erat.</li>
            </ul>
            <p className="mb-2">
                Curabitur at dictum elit, quis rutrum mi. Aliquam erat volutpat. Etiam semper, enim ac dictum dictum, mi risus pretium neque, a bibendum nisi odio in ex. Nulla consectetur vitae dolor at feugiat. Etiam nec enim nec metus ultrices pretium eget ac erat. Nullam placerat justo at arcu commodo, non fermentum mauris commodo. Pellentesque nisi metus, venenatis a enim eu, rutrum facilisis enim.
            </p>
            <p className="mb-2">
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris varius mi eget velit tincidunt, eu feugiat diam tempus. Pellentesque aliquam nec sem eu auctor. Etiam in blandit massa. Etiam elementum pretium tellus nec blandit.
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-4">Advertiser & Agency Guidelines for Third Parties and Ad Related Services</h3>
            <p className="mb-2">
                Nam accumsan eget elit ac hendrerit. Suspendisse dignissim felis felis, eget posuere sem luctus ac. Integer cursus cursus eros, in scelerisque lorem pulvinar nec.
            </p>
            <ul className="list-disc ml-8 mb-2">
                <li>Donec placerat, neque ut pulvinar viverra, eros mauris cursus quam.</li>
                <li>Quisque ut augue et metus ultricies pretium vitae id urna.</li>
                <li>Mauris consectetur, enim ac dictum aliquet, neque erat vehicula sapien.</li>
                <li>Vivamus vel sagittis risus, sed facilisis velit.</li>
                <li>Aliquam non condimentum sapien.</li>
                <li>Nulla ac malesuada enim.</li>
            </ul>
            <p className="mb-2">
                Etiam ultrices et sem eget volutpat. Proin eget erat erat. Nunc faucibus rutrum justo, id sagittis lorem gravida sed. Nullam ac sem nec nunc scelerisque dictum in eget enim. Morbi ac augue eu velit dictum blandit. Sed ac cursus ante, sit amet rutrum leo.
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-4">Audience Data Collection</h3>
            <p className="mb-2">
                Praesent dictum imperdiet velit, eget consequat enim ullamcorper nec. Morbi eu neque bibendum, vestibulum mauris cursus, facilisis enim. Proin ultricies dictum nulla, id suscipit turpis aliquam id.
            </p>
            <p className="mb-2">
                Nunc euismod sapien nec facilisis luctus. Quisque dictum, massa ut viverra facilisis, velit nibh facilisis eros, non consectetur nibh sapien ut erat.
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-4">Attribution & Conversion Tracker Vendors</h3>
            <p>
                Morbi dictum mi a elit tempus, nec porttitor nunc dictum. Aliquam sit amet velit tellus. Mauris id tempor enim. Mauris commodo magna non mi volutpat, ac convallis odio vehicula. Mauris ornare odio in diam tempus porta.
            </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

