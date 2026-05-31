"use client";

import { useState, type FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  purpose: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  purpose?: string;
}

type TouchedFields = Record<keyof FormData, boolean>;

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", purpose: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({ name: false, email: false, purpose: false });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validateField = (field: keyof FormData, value: string): string | undefined => {
    switch (field) {
      case "name":
        if (!value.trim()) return "Name is required";
        break;
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email format";
        break;
      case "purpose":
        if (!value.trim()) return "Purpose is required";
        break;
    }
    return undefined;
  };

  const validateAll = (): boolean => {
    const newErrors: FormErrors = {};
    const nameErr = validateField("name", form.name);
    const emailErr = validateField("email", form.email);
    const purposeErr = validateField("purpose", form.purpose);
    if (nameErr) newErrors.name = nameErr;
    if (emailErr) newErrors.email = emailErr;
    if (purposeErr) newErrors.purpose = purposeErr;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm({ ...form, [field]: value });
    if (touched[field]) {
      const err = validateField(field, value);
      setErrors((prev) => {
        const next = { ...prev };
        if (err) next[field] = err;
        else delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, purpose: true });
    if (!validateAll()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", email: "", purpose: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact-me" className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="max-w-lg mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Contact Me
        </h2>

        {status === "success" ? (
          <div className="text-center p-8 bg-card border border-card-border rounded-xl">
            <p className="text-accent text-lg font-semibold mb-2">Thanks!</p>
            <p className="text-sm text-muted">I&apos;ll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Honeypot */}
            <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-card border border-card-border text-sm focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="Your name"
              />
              {touched.name && errors.name && (
                <p className="text-xs text-red-400 mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-card border border-card-border text-sm focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="you@example.com"
              />
              {touched.email && errors.email && (
                <p className="text-xs text-red-400 mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="purpose" className="block text-sm font-medium mb-1.5">
                Purpose
              </label>
              <textarea
                id="purpose"
                rows={4}
                value={form.purpose}
                onChange={(e) => handleChange("purpose", e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-card border border-card-border text-sm focus:outline-none focus:border-accent/50 transition-colors resize-none"
                placeholder="Tell me about your project or inquiry..."
              />
              {touched.purpose && errors.purpose && (
                <p className="text-xs text-red-400 mt-1">{errors.purpose}</p>
              )}
            </div>

            {status === "error" && (
              <p className="text-sm text-red-400 text-center">
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent-hover transition-colors disabled:opacity-50 cursor-pointer"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
