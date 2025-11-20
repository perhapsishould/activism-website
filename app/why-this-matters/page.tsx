import Button from '@/components/Button';
import Countdown from '@/components/Countdown';

export default function WhyThisMatters() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gray-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            This Is About <span className="text-accent">Your Rights</span>
          </h1>
          <p className="text-xl text-gray-light">
            The proposed legislation isn't just bad policy. It's government overreach that will harm millions of Americans.
          </p>
        </div>
      </section>

      {/* The Bill */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">What's At Stake</h2>
          <div className="space-y-6 text-lg text-gray-light">
            <p>
              In one year, lawmakers will vote on a bill that would dramatically restrict access to a resource that millions of Americans depend on. This isn't a theoretical threat—it's a direct attack on:
            </p>
            <ul className="space-y-4 ml-6">
              <li className="flex items-start">
                <span className="text-accent mr-3 text-2xl">→</span>
                <span><strong className="text-foreground">Economic freedom:</strong> Family farms and agricultural communities will be devastated.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 text-2xl">→</span>
                <span><strong className="text-foreground">Healthcare autonomy:</strong> Veterans and others will be forced back onto dangerous prescription medications.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 text-2xl">→</span>
                <span><strong className="text-foreground">Personal liberty:</strong> Your right to make decisions about your own life will be stripped away.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-16 bg-gray-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Why We Must Fight Now</h2>
          <div className="space-y-6 text-lg text-gray-light">
            <p>
              We have <strong className="text-accent">one year</strong> to make our voices heard. Once this bill passes, the damage will be done. Communities will be destroyed. Lives will be upended. Freedoms will be lost.
            </p>
            <p>
              But if we stand together—farmers, veterans, freedom-loving Americans from every background—we can stop this. We can protect what's ours.
            </p>
            <p className="text-xl font-bold text-foreground">
              This fight is winnable. But only if we act now.
            </p>
          </div>

          <div className="mt-12">
            <Countdown />
          </div>
        </div>
      </section>

      {/* The Opposition */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Who's Behind This Bill</h2>
          <div className="space-y-6 text-lg text-gray-light">
            <p>
              This legislation didn't appear out of nowhere. It's backed by special interests who profit from keeping Americans dependent on their products. They've lobbied hard, spent millions, and convinced politicians to ignore the will of the people.
            </p>
            <p>
              <strong className="text-foreground">But we are stronger.</strong> Grassroots movements have defeated bad bills before, and we'll do it again.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-background">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-background/90 mb-8">
            Contact your representative today. Join thousands who are already fighting back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/take-action" variant="secondary" size="lg">
              Take Action Now
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
