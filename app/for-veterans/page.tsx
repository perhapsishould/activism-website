import Button from '@/components/Button';

export default function ForVeterans() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gray-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">🎖️</span>
            <h1 className="text-5xl md:text-6xl font-bold">
              For <span className="text-accent">Veterans</span>
            </h1>
          </div>
          <p className="text-xl text-gray-light">
            You served your country. You deserve better than being forced back onto prescription opioids.
          </p>
        </div>
      </section>

      {/* The Threat */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">What This Means for You</h2>
          <div className="space-y-6 text-lg text-gray-light">
            <p>
              Thousands of veterans have found relief from chronic pain, PTSD, and other service-connected conditions through alternative treatments. This bill would take that away, forcing many back onto dangerous and addictive prescription medications.
            </p>
            <div className="bg-gray-dark border-l-4 border-accent p-6 my-8">
              <p className="text-xl font-bold text-foreground mb-2">
                The Health Crisis
              </p>
              <p>
                Veterans already face an opioid addiction crisis. Restricting access to safer alternatives isn't just bad policy—it's dangerous.
              </p>
            </div>
            <p>
              You put your life on the line for this country. The least the government can do is let you make your own healthcare decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Stories from Veterans</h2>
          <div className="space-y-6">
            <div className="bg-background border border-gray-medium rounded-lg p-6">
              <p className="text-lg italic mb-4">
                "I served two tours in Afghanistan. I came home with pain that never went away. The VA had me on so many pills I couldn't function. This saved my life. Now they want to take it away? I'm standing up and fighting back."
              </p>
              <p className="text-accent font-semibold">— James T., Texas, US Army Veteran</p>
            </div>
            <div className="bg-background border border-gray-medium rounded-lg p-6">
              <p className="text-lg italic mb-4">
                "I didn't survive combat just to lose my quality of life to a government bill. We're veterans. We know how to fight. And we're not backing down."
              </p>
              <p className="text-accent font-semibold">— Linda K., North Carolina, US Marine Corps Veteran</p>
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
                <strong className="text-foreground">Contact your representatives.</strong> Tell them about your service and why you oppose this bill.
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-accent font-bold mr-4 text-2xl">2.</span>
              <div>
                <strong className="text-foreground">Connect with other veterans.</strong> Organize through your VSO, VFW, or American Legion post. Strength in numbers.
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-accent font-bold mr-4 text-2xl">3.</span>
              <div>
                <strong className="text-foreground">Share your story.</strong> Your voice carries weight. Lawmakers need to hear from the people they claim to serve.
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
