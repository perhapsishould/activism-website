import Button from '@/components/Button';

export default function ForFreedom() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gray-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">🗽</span>
            <h1 className="text-5xl md:text-6xl font-bold">
              For <span className="text-accent">Freedom</span>
            </h1>
          </div>
          <p className="text-xl text-gray-light">
            Government has no place interfering in your personal life. This is about liberty and your right to choose.
          </p>
        </div>
      </section>

      {/* The Principle */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">This Is About More Than Policy</h2>
          <div className="space-y-6 text-lg text-gray-light">
            <p>
              This bill represents a fundamental question: <strong className="text-foreground">Who controls your life—you or the government?</strong>
            </p>
            <p>
              Whether you're a farmer, a veteran, or just an American who believes in personal freedom, this legislation is an assault on your right to make decisions about your own life, your own body, and your own property.
            </p>
            <div className="bg-gray-dark border-l-4 border-accent p-6 my-8">
              <p className="text-xl font-bold text-foreground mb-2">
                The Principle at Stake
              </p>
              <p>
                When government restricts access to something that doesn't harm others, it's not protecting anyone. It's controlling everyone.
              </p>
            </div>
            <p>
              This isn't a left or right issue. It's a freedom issue. And freedom-loving Americans from all backgrounds are standing together to oppose it.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16 bg-gray-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">The Slippery Slope</h2>
          <div className="space-y-6 text-lg text-gray-light">
            <p>
              Today it's this. Tomorrow, what else will they restrict?
            </p>
            <p>
              Every time we allow government to expand its reach into our personal lives, we set a precedent. We say it's okay for bureaucrats and politicians to decide what's best for us, regardless of our own judgment, our own needs, our own circumstances.
            </p>
            <p className="text-xl font-bold text-foreground">
              If we don't draw the line here, where do we draw it?
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Voices for Liberty</h2>
          <div className="space-y-6">
            <div className="bg-gray-dark border border-gray-medium rounded-lg p-6">
              <p className="text-lg italic mb-4">
                "I don't care what party you're from. This isn't about politics. It's about whether we still live in a free country. I'm fighting to keep it that way."
              </p>
              <p className="text-accent font-semibold">— Alex R., Colorado</p>
            </div>
            <div className="bg-gray-dark border border-gray-medium rounded-lg p-6">
              <p className="text-lg italic mb-4">
                "Government exists to protect our rights, not to decide how we live our lives. This bill crosses that line. We're pushing back."
              </p>
              <p className="text-accent font-semibold">— Robert H., Oregon</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="py-16 bg-gray-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">How You Can Defend Freedom</h2>
          <div className="space-y-4 text-lg text-gray-light mb-8">
            <div className="flex items-start">
              <span className="text-accent font-bold mr-4 text-2xl">1.</span>
              <div>
                <strong className="text-foreground">Make your voice heard.</strong> Contact your representatives and tell them you oppose government overreach.
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-accent font-bold mr-4 text-2xl">2.</span>
              <div>
                <strong className="text-foreground">Join the coalition.</strong> Connect with others who believe in liberty and limited government.
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-accent font-bold mr-4 text-2xl">3.</span>
              <div>
                <strong className="text-foreground">Spread the message.</strong> This fight is winnable if enough people stand up. Be one of them.
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
