'use client';

import { useState } from 'react';
import Button from './Button';

export default function VolunteerSignupForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Form is non-functional for prototype - just show confirmation
  };

  if (submitted) {
    return (
      <div className="bg-gray-dark border border-accent rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4 text-accent">Welcome to the Fight!</h3>
        <p className="text-lg mb-6">
          You're now part of a growing movement. We'll be in touch soon with ways you can make an impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/take-action" variant="primary">
            Contact Your Rep
          </Button>
          <Button href="/blog" variant="outline">
            Read Latest Updates
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-dark border border-gray-medium rounded-lg p-8" id="volunteer">
      <h3 className="text-2xl font-bold mb-4">Join the Movement</h3>
      <p className="text-gray-light mb-6">
        Sign up to volunteer and we'll connect you with opportunities to make a real difference.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="John"
              className="w-full bg-background border border-gray-medium rounded px-4 py-3 focus:outline-none focus:border-accent transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Doe"
              className="w-full bg-background border border-gray-medium rounded px-4 py-3 focus:outline-none focus:border-accent transition-colors"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="emailVol" className="block text-sm font-semibold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="emailVol"
            placeholder="john@example.com"
            className="w-full bg-background border border-gray-medium rounded px-4 py-3 focus:outline-none focus:border-accent transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="(555) 123-4567"
            className="w-full bg-background border border-gray-medium rounded px-4 py-3 focus:outline-none focus:border-accent transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="zipVol" className="block text-sm font-semibold mb-2">
            ZIP Code
          </label>
          <input
            type="text"
            id="zipVol"
            placeholder="12345"
            className="w-full bg-background border border-gray-medium rounded px-4 py-3 focus:outline-none focus:border-accent transition-colors"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-3">
            How would you like to help? (Select all that apply)
          </label>
          <div className="space-y-2">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 bg-background border border-gray-medium rounded accent-accent"
              />
              <span>Phone banking / Calling voters</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 bg-background border border-gray-medium rounded accent-accent"
              />
              <span>Canvassing / Door-to-door outreach</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 bg-background border border-gray-medium rounded accent-accent"
              />
              <span>Social media advocacy</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 bg-background border border-gray-medium rounded accent-accent"
              />
              <span>Event organizing</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 bg-background border border-gray-medium rounded accent-accent"
              />
              <span>Other ways to contribute</span>
            </label>
          </div>
        </div>

        <Button type="submit" variant="primary" size="lg" className="w-full">
          Sign Up to Volunteer
        </Button>
      </form>
    </div>
  );
}
