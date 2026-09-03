"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, Check, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import siteConfig from "@/data/siteConfig.json";

const businessTypes = [
  "Salon / Beauty Studio",
  "Jewellery Boutique",
  "Cafe / Restaurant",
  "Boutique / Clothing Store",
  "Consultant",
  "Freelancer",
  "Local Service Business",
  "Small Shop",
  "Other",
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    businessName: "",
    businessType: "",
    email: "",
    phone: "",
    website: "",
    problem: "",
    help: "",
  });

  const update = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nBusiness Name: ${form.businessName}\nBusiness Type: ${form.businessType}\nEmail: ${form.email}\nPhone / WhatsApp: ${form.phone}\nCurrent Website: ${form.website || "N/A"}\n\nProblem:\n${form.problem}\n\nHow can we help?\n${form.help}`
    );
    window.location.href = `mailto:${siteConfig.brand.email}?subject=${encodeURIComponent(
      "New enquiry from " + (form.businessName || form.name)
    )}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="pt-24 md:pt-28">
      <section className="section">
        <div className="container-page grid lg:grid-cols-5 gap-14">
          <div className="lg:col-span-2">
            <Reveal>
              <span className="eyebrow">Get In Touch</span>
              <h1 className="font-display font-extrabold text-4xl mb-5 leading-tight">
                Let&apos;s talk about your business.
              </h1>
              <p className="text-ink-soft text-[15.5px] leading-relaxed mb-8">
                No need for technical details. Just tell us the problem — we&apos;ll figure out together what a simple digital solution could look like.
              </p>

              <a
                href={siteConfig.brand.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 card p-5 hover:border-green/40 transition-colors mb-4"
              >
                <div className="h-11 w-11 rounded-full bg-green flex items-center justify-center shrink-0">
                  <MessageCircle size={19} className="text-white" fill="currentColor" strokeWidth={0} />
                </div>
                <div>
                  <p className="font-semibold text-[14px] text-ink">Prefer WhatsApp?</p>
                  <p className="text-[13px] text-ink-soft">{siteConfig.brand.whatsappDisplay}</p>
                </div>
              </a>

              <div className="card p-5 flex flex-col gap-4">
                <a href={`mailto:${siteConfig.brand.email}`} className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                  <div className="h-11 w-11 rounded-full bg-saffron-tint flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-saffron-dark" />
                  </div>
                  <div>
                    <p className="font-semibold text-[14px] text-ink">Email</p>
                    <p className="text-[13px] text-ink-soft">{siteConfig.brand.email}</p>
                  </div>
                </a>

                <a href={`tel:${siteConfig.brand.phone1.replace(/\s/g, "")}`} className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                  <div className="h-11 w-11 rounded-full bg-saffron-tint flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-saffron-dark" />
                  </div>
                  <div>
                    <p className="font-semibold text-[14px] text-ink">Call us</p>
                    <p className="text-[13px] text-ink-soft">
                      {siteConfig.brand.phone1} / {siteConfig.brand.phone2}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-full bg-saffron-tint flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-saffron-dark" />
                  </div>
                  <div>
                    <p className="font-semibold text-[14px] text-ink">Address</p>
                    <p className="text-[13px] text-ink-soft">{siteConfig.brand.address}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              {sent ? (
                <div className="card p-10 md:p-14 text-center">
                  <div className="h-14 w-14 rounded-full bg-green-tint flex items-center justify-center mx-auto mb-5">
                    <Check className="text-green" size={26} />
                  </div>
                  <h2 className="font-display font-bold text-2xl mb-2">Thank you!</h2>
                  <p className="text-ink-soft text-[15px]">
                    We&apos;ve received your message. We&apos;ll get back to you soon. If your email app didn&apos;t open, write to us directly at{" "}
                    <a href={`mailto:${siteConfig.brand.email}`} className="text-saffron font-semibold">{siteConfig.brand.email}</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card p-6 md:p-8 flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Name" required>
                      <input required value={form.name} onChange={update("name")} className="input" placeholder="Your name" />
                    </Field>
                    <Field label="Business Name" required>
                      <input required value={form.businessName} onChange={update("businessName")} className="input" placeholder="Your business name" />
                    </Field>
                  </div>

                  <Field label="Business Type" required>
                    <select required value={form.businessType} onChange={update("businessType")} className="input">
                      <option value="" disabled>Select business type</option>
                      {businessTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </Field>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Email" required>
                      <input required type="email" value={form.email} onChange={update("email")} className="input" placeholder="you@example.com" />
                    </Field>
                    <Field label="Phone / WhatsApp" required>
                      <input required value={form.phone} onChange={update("phone")} className="input" placeholder="98765 43210" />
                    </Field>
                  </div>

                  <Field label="Current Website (optional)">
                    <input value={form.website} onChange={update("website")} className="input" placeholder="https://..." />
                  </Field>

                  <Field label="What problem are you facing?" required>
                    <textarea required value={form.problem} onChange={update("problem")} className="input min-h-[100px] resize-none" placeholder="Tell us what's difficult right now..." />
                  </Field>

                  <Field label="How can we help?">
                    <textarea value={form.help} onChange={update("help")} className="input min-h-[80px] resize-none" placeholder="Any specific ideas or requests?" />
                  </Field>

                  <button type="submit" className="btn-primary !w-full mt-2">
                    Send My Problem <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[13px] font-semibold text-ink">
        {label} {required && <span className="text-saffron">*</span>}
      </span>
      {children}
    </label>
  );
}