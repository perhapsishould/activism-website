import Button from '@/components/Button';
import Countdown from '@/components/Countdown';
import TestimonialTicker from '@/components/TestimonialTicker';
import SupporterCount from '@/components/SupporterCount';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background image placeholder */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-gray-dark to-background opacity-90 z-0" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
            They're Coming for
            <br />
            <span className="text-accent">Your Freedom</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-light mb-8 max-w-3xl mx-auto">
            In one year, the government will vote to restrict your access.
            This isn't about politics. It's about protecting what's yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button href="/take-action#volunteer" variant="primary" size="lg">
              Join the Fight
            </Button>
            <Button href="/take-action" variant="outline" size="lg">
              Contact Your Rep
            </Button>
          </div>

          <div className="mt-16">
            <Countdown />
          </div>
        </div>
      </section>

      {/* Testimonial Ticker */}
      <TestimonialTicker />

      {/* Three Audiences */}
      <section className="py-20 bg-gray-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Who We Fight For</h2>
          <p className="text-center text-gray-light mb-12 text-lg">
            This affects all of us. Find your story below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Farmers */}
            <div className="bg-background border border-gray-medium rounded-lg p-8 hover:border-accent transition-colors">
              <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">🌾</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">For Farmers</h3>
              <p className="text-gray-light mb-6">
                Your livelihood is under attack. This bill will shut down farms and destroy communities that depend on this crop.
              </p>
              <Button href="/for-farmers" variant="outline" size="sm" className="w-full">
                Learn More
              </Button>
            </div>

            {/* Veterans */}
            <div className="bg-background border border-gray-medium rounded-lg p-8 hover:border-accent transition-colors">
              <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">🎖️</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">For Veterans</h3>
              <p className="text-gray-light mb-6">
                You served your country. You deserve better than being forced back onto prescription opioids to manage your pain.
              </p>
              <Button href="/for-veterans" variant="outline" size="sm" className="w-full">
                Learn More
              </Button>
            </div>

            {/* Freedom */}
            <div className="bg-background border border-gray-medium rounded-lg p-8 hover:border-accent transition-colors">
              <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">🗽</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">For Freedom</h3>
              <p className="text-gray-light mb-6">
                Government has no place interfering in your personal life. This is about principle, liberty, and your right to choose.
              </p>
              <Button href="/for-freedom" variant="outline" size="sm" className="w-full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Supporter Count */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SupporterCount />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-background">
            We Won't Back Down
          </h2>
          <p className="text-xl text-background/90 mb-8">
            Every voice matters. Every action counts. Join us in this fight.
          </p>
          <Button href="/take-action#volunteer" variant="secondary" size="lg">
            Stand With Us Today
          </Button>
        </div>
      </section>
    </>
  );
}
