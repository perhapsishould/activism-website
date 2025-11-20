import Button from '@/components/Button';
import Link from 'next/link';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Breaking: Coalition of Farm Organizations Oppose Bill',
      excerpt: 'Major agricultural groups from across the country have united in opposition to the proposed legislation, calling it "devastating" for family farms.',
      date: 'November 15, 2025',
      category: 'News',
    },
    {
      id: 2,
      title: 'Veterans Groups Rally in Washington',
      excerpt: 'Thousands of veterans gathered at the Capitol to voice their opposition to restrictions that would force them back onto prescription opioids.',
      date: 'November 12, 2025',
      category: 'Events',
    },
    {
      id: 3,
      title: 'Town Hall Success: 500+ Supporters Show Up',
      excerpt: 'Our first community town hall exceeded all expectations. Here's what happened and what comes next.',
      date: 'November 8, 2025',
      category: 'Updates',
    },
    {
      id: 4,
      title: 'The Economic Impact: By the Numbers',
      excerpt: 'A new study reveals the full economic devastation this bill would cause. The numbers are staggering.',
      date: 'November 5, 2025',
      category: 'Research',
    },
    {
      id: 5,
      title: 'How to Talk to Your Representative',
      excerpt: 'Tips and strategies for making your voice heard when you contact your elected officials.',
      date: 'November 1, 2025',
      category: 'Resources',
    },
    {
      id: 6,
      title: 'Profile: Meet the Farmers Fighting Back',
      excerpt: 'We spoke with three family farmers about what this bill means for them and why they're not backing down.',
      date: 'October 28, 2025',
      category: 'Stories',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gray-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            News & <span className="text-accent">Updates</span>
          </h1>
          <p className="text-xl text-gray-light">
            Stay informed about the fight. Get the latest news, event updates, and stories from the movement.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-dark border border-gray-medium rounded-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-accent text-background px-3 py-1 text-sm font-bold rounded uppercase">
                  Featured
                </span>
                <span className="text-gray-light text-sm">November 15, 2025</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Coalition of Farm Organizations Oppose Bill
              </h2>
              <p className="text-lg text-gray-light mb-6">
                In a historic show of unity, major agricultural organizations representing farmers from all 50 states have come together to formally oppose the proposed legislation. "This bill would be devastating for family farms and rural communities," said coalition spokesperson Maria Rodriguez.
              </p>
              <Button href="#" variant="primary">
                Read Full Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-gray-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Recent Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-background border border-gray-medium rounded-lg p-6 hover:border-accent transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-accent text-sm font-semibold uppercase">
                    {post.category}
                  </span>
                  <span className="text-gray-light text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-light mb-4">{post.excerpt}</p>
                <Link href="#" className="text-accent hover:text-accent-hover font-semibold transition-colors">
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-dark border border-accent rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-lg text-gray-light mb-6">
              Get the latest updates delivered straight to your inbox. We'll keep you informed about news, events, and ways to take action.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-background border border-gray-medium rounded px-4 py-3 focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent-hover text-background px-6 py-3 rounded font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
