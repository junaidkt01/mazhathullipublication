'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { PrimaryButton } from '@/components/common/PrimaryButton';

export const ContactOptions: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* WhatsApp Option */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-4">
        <div className="w-12 h-12 rounded-xl bg-[#00A859]/10 text-[#00A859] flex items-center justify-center">
          <Phone className="w-6 h-6" />
        </div>
        <h3 className="font-serif text-xl font-bold text-[#111111]">WhatsApp Direct</h3>
        <p className="text-xs text-gray-600 font-sans leading-relaxed">
          Fastest response for book orders, course enrolment, and publishing queries.
        </p>
        <WhatsAppButton
          type="general"
          size="sm"
          fullWidth
          label="Chat on WhatsApp"
        />
      </div>

      {/* General Enquiries */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-4">
        <div className="w-12 h-12 rounded-xl bg-[#0098DA]/10 text-[#0098DA] flex items-center justify-center">
          <Mail className="w-6 h-6" />
        </div>
        <h3 className="font-serif text-xl font-bold text-[#111111]">General Enquiries</h3>
        <p className="text-xs text-gray-600 font-sans leading-relaxed">
          hello@mazhathulli.com
          <br />
          Monsoon Press Desk
        </p>
        <a
          href="mailto:hello@mazhathulli.com"
          className="inline-block text-xs font-semibold text-[#0098DA] hover:underline"
        >
          Send Email →
        </a>
      </div>

      {/* Manuscript Submissions */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-4">
        <div className="w-12 h-12 rounded-xl bg-[#108BB9]/10 text-[#108BB9] flex items-center justify-center">
          <Mail className="w-6 h-6" />
        </div>
        <h3 className="font-serif text-xl font-bold text-[#111111]">Publishing Desk</h3>
        <p className="text-xs text-gray-600 font-sans leading-relaxed">
          publish@mazhathulli.com
          <br />
          Manuscript Proposals
        </p>
        <WhatsAppButton
          type="publishing"
          size="sm"
          variant="outline"
          fullWidth
          label="Publishing Enquiry"
        />
      </div>

      {/* Locations */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-4">
        <div className="w-12 h-12 rounded-xl bg-[#111111]/10 text-[#111111] flex items-center justify-center">
          <MapPin className="w-6 h-6" />
        </div>
        <h3 className="font-serif text-xl font-bold text-[#111111]">Our Locations</h3>
        <p className="text-xs text-gray-600 font-sans leading-relaxed">
          Kozhikode & Kochi, Kerala, India
        </p>
        <span className="text-[11px] text-[#00A859] font-semibold block">Visiting by Appointment</span>
      </div>
    </div>
  );
};

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Book Enquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || (!formData.email && !formData.phone) || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-md">
      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] mb-2">
        Send Us a Message
      </h3>
      <p className="text-sm text-gray-600 font-sans mb-8">
        Fill in your details below and our editorial team will get back to you within 24 hours.
      </p>

      {submitted ? (
        <div className="p-8 text-center bg-[#00A859]/10 border border-[#00A859]/30 rounded-2xl space-y-3">
          <CheckCircle className="w-12 h-12 text-[#00A859] mx-auto" />
          <h4 className="font-serif text-2xl font-bold text-[#111111]">Message Sent Successfully</h4>
          <p className="text-sm text-gray-600 font-sans max-w-md mx-auto">
            Thank you, {formData.name}! We have received your enquiry regarding "{formData.category}".
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-semibold text-[#0098DA] underline pt-2 inline-block"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Your Full Name *
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Anjali Nair"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0098DA]"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Email / Phone *
              </label>
              <input
                id="contact-email"
                type="text"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="email@domain.com or phone"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0098DA]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-category" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              Enquiry Category
            </label>
            <select
              id="contact-category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0098DA]"
            >
              <option value="Book Enquiry">Book Orders & Enquiries</option>
              <option value="Course Enquiries">Writing Academy & Courses</option>
              <option value="Publishing Proposals">Manuscript Submission & Publishing</option>
              <option value="Droplet Store">Droplet.co Gifts & Art Frames</option>
              <option value="Awards Information">Mazhathulli Awards</option>
              <option value="General">General Enquiry</option>
            </select>
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              Your Message *
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us more about how we can help you..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0098DA]"
            />
          </div>

          <PrimaryButton type="submit" size="lg" variant="blue" icon={<Send className="w-4 h-4" />}>
            Send Message
          </PrimaryButton>
        </form>
      )}
    </div>
  );
};
