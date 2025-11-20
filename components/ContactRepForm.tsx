'use client';

import { useState } from 'react';
import Button from './Button';

export default function ContactRepForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Form is non-functional for prototype - just show confirmation
  };

  if (submitted) {
    return (
      <div className="bg-gray-dark border border-accent rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4 text-accent">Message Sent!</h3>
        <p className="text-lg mb-6">
          Your voice matters. Now take the next step and join thousands of others fighting back.
        </p>
        <Button href="/take-action#volunteer" variant="primary" size="lg">
          Join the Movement
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gray-dark border border-gray-medium rounded-lg p-8">
      <h3 className="text-2xl font-bold mb-4">Contact Your Representative</h3>
      <p className="text-gray-light mb-6">
        Make your voice heard. Send a message to your elected officials and tell them to vote NO on this bill.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="zip" className="block text-sm font-semibold mb-2">
            Your ZIP Code
          </label>
          <input
            type="text"
            id="zip"
            placeholder="12345"
            className="w-full bg-background border border-gray-medium rounded px-4 py-3 focus:outline-none focus:border-accent transition-colors"
            required
          />
          <p className="text-xs text-gray-light mt-1">We'll find your representatives for you</p>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="w-full bg-background border border-gray-medium rounded px-4 py-3 focus:outline-none focus:border-accent transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="john@example.com"
            className="w-full bg-background border border-gray-medium rounded px-4 py-3 focus:outline-none focus:border-accent transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-2">
            Your Message (Optional - We've provided a template)
          </label>
          <textarea
            id="message"
            rows={6}
            placeholder="I'm writing to urge you to vote NO on the proposed bill that would restrict access to [resource]. This legislation is government overreach and will harm families, veterans, and communities across our state..."
            className="w-full bg-background border border-gray-medium rounded px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
          />
        </div>

        <Button type="submit" variant="primary" size="lg" className="w-full">
          Send Message to My Representatives
        </Button>
      </form>
    </div>
  );
}
