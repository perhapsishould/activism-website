'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gray-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="text-xl text-gray-light">
            Questions? Want to get involved? Media inquiry? We want to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-gray-dark border border-accent rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-accent">Message Received!</h3>
                  <p className="text-lg text-gray-light">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      placeholder="Your name"
                      className="w-full bg-gray-dark border border-gray-medium rounded px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail" className="block text-sm font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      placeholder="your@email.com"
                      className="w-full bg-gray-dark border border-gray-medium rounded px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full bg-gray-dark border border-gray-medium rounded px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                      required
                    >
                      <option value="">Select a topic...</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="media">Media Inquiry</option>
                      <option value="partnership">Partnership/Coalition</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contactMessage" className="block text-sm font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="contactMessage"
                      rows={6}
                      placeholder="Your message..."
                      className="w-full bg-gray-dark border border-gray-medium rounded px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Other Ways to Reach Us</h2>
              <div className="space-y-6">
                <div className="bg-gray-dark border border-gray-medium rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Email</h3>
                  <p className="text-gray-light mb-2">General inquiries:</p>
                  <a href="mailto:info@protectourfreedom.org" className="text-accent hover:text-accent-hover">
                    info@protectourfreedom.org
                  </a>
                  <p className="text-gray-light mt-4 mb-2">Media inquiries:</p>
                  <a href="mailto:press@protectourfreedom.org" className="text-accent hover:text-accent-hover">
                    press@protectourfreedom.org
                  </a>
                </div>

                <div className="bg-gray-dark border border-gray-medium rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Social Media</h3>
                  <p className="text-gray-light mb-4">
                    Follow us for the latest updates and ways to take action.
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded font-semibold text-sm transition-colors">
                      Facebook
                    </a>
                    <a href="#" className="px-4 py-2 bg-sky-500 hover:bg-sky-600 rounded font-semibold text-sm transition-colors">
                      Twitter
                    </a>
                    <a href="#" className="px-4 py-2 bg-rose-600 hover:bg-rose-700 rounded font-semibold text-sm transition-colors">
                      Instagram
                    </a>
                  </div>
                </div>

                <div className="bg-gray-dark border border-gray-medium rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">For Media</h3>
                  <p className="text-gray-light">
                    Media kit, press releases, and interview requests available upon request. Please use the media email above or the contact form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-background">
            Don't Wait. Take Action.
          </h2>
          <p className="text-xl text-background/90 mb-8">
            While you're here, contact your representative and join the movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/take-action" variant="secondary" size="lg">
              Contact Your Rep
            </Button>
            <Button href="/take-action#volunteer" variant="outline" size="lg" className="border-background text-background hover:bg-background hover:text-accent">
              Volunteer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
