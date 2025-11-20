import Button from '@/components/Button';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gray-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-accent">Our Movement</span>
          </h1>
          <p className="text-xl text-gray-light">
            We're a grassroots coalition of Americans from all walks of life, united by one goal: stopping government overreach.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <div className="space-y-6 text-lg text-gray-light">
            <p>
              When we learned about the proposed legislation that would restrict access and harm millions of Americans, we knew we couldn't stay silent. This isn't about any one political party or ideology—it's about defending the freedom of everyday people against government overreach.
            </p>
            <p>
              Our mission is simple: <strong className="text-foreground">Defeat this bill and protect the rights of farmers, veterans, and all Americans who believe in personal liberty.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-gray-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <div className="space-y-6 text-lg text-gray-light">
            <p>
              We're farmers who depend on this for our livelihoods. We're veterans who rely on it for our health. We're citizens who believe government shouldn't control every aspect of our lives.
            </p>
            <p>
              We come from red states and blue states. We have different backgrounds, different professions, different politics. But we're united in opposition to this dangerous legislation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Coalition */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Our Coalition Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-dark border border-gray-medium rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Agricultural Organizations</h3>
              <p className="text-gray-light">
                Family farm associations, agricultural co-ops, and farming advocacy groups from across the country.
              </p>
            </div>
            <div className="bg-gray-dark border border-gray-medium rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Veterans Groups</h3>
              <p className="text-gray-light">
                Veteran service organizations, military advocacy groups, and networks of veterans supporting alternative healthcare.
              </p>
            </div>
            <div className="bg-gray-dark border border-gray-medium rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Civil Liberties Organizations</h3>
              <p className="text-gray-light">
                Groups dedicated to protecting personal freedom and limiting government overreach into private lives.
              </p>
            </div>
            <div className="bg-gray-dark border border-gray-medium rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Community Organizers</h3>
              <p className="text-gray-light">
                Local activists, grassroots leaders, and concerned citizens organizing in their own communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-accent text-3xl font-bold">→</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Personal Freedom</h3>
                <p className="text-gray-light">
                  We believe individuals should have the right to make their own choices without unnecessary government interference.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-accent text-3xl font-bold">→</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Economic Liberty</h3>
                <p className="text-gray-light">
                  Farmers and businesses should be free to operate without government restricting their livelihoods.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-accent text-3xl font-bold">→</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Healthcare Autonomy</h3>
                <p className="text-gray-light">
                  Individuals should have the right to make their own healthcare decisions in consultation with their doctors.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-accent text-3xl font-bold">→</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Grassroots Power</h3>
                <p className="text-gray-light">
                  Real change comes from ordinary people standing up, speaking out, and organizing together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-background">
            Join Us in This Fight
          </h2>
          <p className="text-xl text-background/90 mb-8">
            Be part of a movement that's making a real difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/take-action#volunteer" variant="secondary" size="lg">
              Volunteer Today
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-background text-background hover:bg-background hover:text-accent">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
