"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  type LucideIcon
} from "lucide-react";
import { getSupabase } from "@/lib/supabase";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "Mutual Funds",
  message: ""
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [error, setError] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    let value = e.target.value;
    if (e.target.name === "phone") {
      // Allow only digits, plus, minus, and spaces for phone
      value = value.replace(/[^\d+\-\s]/g, "");
    }
    setForm((f) => ({ ...f, [e.target.name]: value }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (!form.name.trim()) {
      setError("Please enter your full name.");
      setStatus("err");
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address.");
      setStatus("err");
      return;
    }
    
    const phoneClean = form.phone.replace(/[-+\s]/g, "");
    if (phoneClean.length < 10) {
      setError("Please enter a valid phone number (at least 10 digits).");
      setStatus("err");
      return;
    }

    if (form.message.trim().length < 10) {
      setError("Please enter a message (at least 10 characters).");
      setStatus("err");
      return;
    }

    setStatus("loading");
    setError(null);
    try {
      const supabase = getSupabase();
      if (supabase) {
        const { error: err } = await supabase.from("contact_messages").insert([
          {
            name: form.name,
            email: form.email,
            phone: form.phone,
            service: form.service,
            message: form.message,
            source: "zenvest-website"
          }
        ]);
        if (err) throw err;
      } else {
        // No Supabase configured yet — simulate success
        await new Promise((r) => setTimeout(r, 800));
      }
      setStatus("ok");
      setForm(initial);
    } catch (e: any) {
      setStatus("err");
      setError(e?.message ?? "Something went wrong. Please try again.");
    }
  }

  if (status === "ok") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-3xl border border-moss-200 bg-white p-10 text-center shadow-soft"
      >
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-moss-50 text-moss-500">
          <CheckCircle2 size={32} />
        </span>
        <h3 className="mt-4 font-display text-2xl font-bold text-navy-900">
          Thank you!
        </h3>
        <p className="mt-2 max-w-sm text-navy-700">
          Your message has been received. A Zenvest expert will reach out within
          one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-navy-200 bg-white px-5 py-2.5 text-sm font-semibold text-navy-800 hover:bg-navy-50"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft md:p-8"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Field icon={User} label="Full name" name="name" value={form.name} onChange={onChange} required />
        <Field
          icon={Mail}
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          required
        />
        <Field
          icon={Phone}
          label="Phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={onChange}
          required
        />
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-navy-600">
            Interested in
          </label>
          <select
            name="service"
            value={form.service}
            onChange={onChange}
            className="w-full rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-gold-400 focus:ring-4 focus:ring-gold-100"
          >
            {[
              "Mutual Funds",
              "Fixed Deposits",
              "Bonds",
              "Tax Saving",
              "PMS / AIF",
              "Child Future Saving",
              "General Enquiry"
            ].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-navy-600">
          Message
        </label>
        <div className="relative">
          <MessageSquare
            size={16}
            className="pointer-events-none absolute left-3 top-3 text-navy-400"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            rows={5}
            placeholder="Tell us a bit about your goals..."
            className="w-full resize-none rounded-xl border border-navy-100 bg-white px-10 py-3 text-sm text-navy-900 outline-none transition-colors placeholder:text-navy-400 focus:border-gold-400 focus:ring-4 focus:ring-gold-100"
            required
          />
        </div>
      </div>

      {status === "err" && error && (
        <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}

      <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-xs text-navy-500">
          By submitting, you agree to be contacted by Zenvest Wealth. Your data is
          used strictly to respond to your enquiry.
        </p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 rounded-full bg-navy-800 px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-navy-700 disabled:opacity-70"
        >
          {status === "loading" ? "Sending..." : "Send message"}
          <Send size={14} />
        </button>
      </div>
    </form>
  );
}

function Field({
  icon: Icon,
  label,
  ...props
}: {
  icon: LucideIcon;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-navy-600">
        {label}
      </label>
      <div className="relative">
        <Icon
          size={16}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-navy-400"
        />
        <input
          {...props}
          className="w-full rounded-xl border border-navy-100 bg-white px-10 py-3 text-sm text-navy-900 outline-none transition-colors placeholder:text-navy-400 focus:border-gold-400 focus:ring-4 focus:ring-gold-100"
        />
      </div>
    </div>
  );
}
