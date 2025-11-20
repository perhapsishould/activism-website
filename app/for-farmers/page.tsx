import Button from '@/components/Button';

export default function ForFarmers() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gray-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">🌾</span>
            <h1 className="text-5xl md:text-6xl font-bold">
              For <span className="text-accent">Farmers</span>
            </h1>
          </div>
          <p className="text-xl text-gray-light">
            Your livelihood is under attack. This bill threatens family farms and the communities that depend on them.
          </p>
        </div>
      </section>

      {/* The Threat */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">What This Means for You</h2>
          <div className="space-y-6 text-lg text-gray-light">
            <p>
              If this bill passes, farms across the country that grow this crop will face impossible choices: abandon what you've built, or face crippling restrictions that make your operation unviable.
            </p>
            <div className="bg-gray-dark border-l-4 border-accent p-6 my-8">
              <p className="text-xl font-bold text-foreground mb-2">
                The Economic Reality
              </p>
              <p>
                Thousands of farms. Tens of thousands of jobs. Entire rural economies built around this industry—all at risk.
              </p>
            </div>
            <p>
              This isn't just about one crop. It's about your ability to run your farm, feed your family, and pass something down to the next generation.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Voices from the Field</h2>
          <div className="space-y-6">
            <div className="bg-background border border-gray-medium rounded-lg p-6">
              <p className="text-lg italic mb-4">
                "My grandfather started this farm 70 years ago. We've survived droughts, floods, and market crashes. But if this bill passes, we're done. I won't let them take this without a fight."
              </p>
              <p className="text-accent font-semibold">— Sarah M., Iowa</p>
            </div>
            <div className="bg-background border border-gray-medium rounded-lg p-6">
              <p className="text-lg italic mb-4">
                "This crop is 40% of our income. What am I supposed to tell my workers? What am I supposed to tell my kids? The government has no right to destroy what we've built."
              </p>
              <p className="text-accent font-semibold">— Miguel C., California</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">How You Can Fight Back</h2>
          <div className="space-y-4 text-lg text-gray-light mb-8">
            <div className="flex items-start">
              <span className="text-accent font-bold mr-4 text-2xl">1.</span>
              <div>
                <strong className="text-foreground">Contact your representatives.</strong> Tell them this bill will destroy family farms and rural communities.
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-accent font-bold mr-4 text-2xl">2.</span>
              <div>
                <strong className="text-foreground">Join the movement.</strong> Connect with other farmers fighting this bill. Share resources, strategies, and support.
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-accent font-bold mr-4 text-2xl">3.</span>
              <div>
                <strong className="text-foreground">Spread the word.</strong> Talk to your neighbors, your co-op, your farm bureau. Make sure everyone knows what's at stake.
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/take-action" variant="primary" size="lg">
              Contact Your Rep
            </Button>
            <Button href="/take-action#volunteer" variant="outline" size="lg">
              Join the Movement
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
