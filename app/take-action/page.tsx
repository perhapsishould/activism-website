import ContactRepForm from '@/components/ContactRepForm';
import VolunteerSignupForm from '@/components/VolunteerSignupForm';
import Countdown from '@/components/Countdown';

export default function TakeAction() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gray-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Take <span className="text-accent">Action</span> Today
          </h1>
          <p className="text-xl text-gray-light mb-8">
            Every voice matters. Every action counts. Here's how you can make a real difference.
          </p>
          <Countdown />
        </div>
      </section>

      {/* Contact Your Rep */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Contact Your Representative</h2>
            <p className="text-lg text-gray-light">
              The single most impactful thing you can do is let your elected officials know you oppose this bill.
            </p>
          </div>
          <ContactRepForm />
        </div>
      </section>

      {/* Volunteer */}
      <section className="py-16 bg-gray-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Join the Movement</h2>
            <p className="text-lg text-gray-light">
              Sign up to volunteer and connect with thousands of others fighting for freedom.
            </p>
          </div>
          <VolunteerSignupForm />
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Other Ways to Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-dark border border-gray-medium rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Share on Social Media</h3>
              <p className="text-gray-light mb-4">
                Spread the word. The more people who know about this fight, the stronger we become.
              </p>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded font-semibold text-sm transition-colors">
                  Share on Facebook
                </button>
                <button className="px-4 py-2 bg-sky-500 hover:bg-sky-600 rounded font-semibold text-sm transition-colors">
                  Share on Twitter
                </button>
              </div>
            </div>

            <div className="bg-gray-dark border border-gray-medium rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Attend Events</h3>
              <p className="text-gray-light mb-4">
                Join rallies, town halls, and community meetings. Show up and be counted.
              </p>
              <p className="text-accent font-semibold">
                Events calendar coming soon
              </p>
            </div>

            <div className="bg-gray-dark border border-gray-medium rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Download Resources</h3>
              <p className="text-gray-light mb-4">
                Get talking points, flyers, and social media graphics to help spread the message.
              </p>
              <p className="text-accent font-semibold">
                Resource toolkit coming soon
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
