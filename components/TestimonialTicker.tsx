'use client';

const testimonials = [
  { quote: "I'm a farmer in Iowa and I won't go down without a fight", name: "Sarah M.", location: "Iowa" },
  { quote: "This bill will force me back onto opioids. We deserve better.", name: "James T.", location: "Texas", badge: "Veteran" },
  { quote: "Government has no place in our personal freedoms", name: "Alex R.", location: "Colorado" },
  { quote: "My family's livelihood depends on this. We're standing strong.", name: "Miguel C.", location: "California" },
  { quote: "I served this country. Now I'm fighting for it again.", name: "Linda K.", location: "North Carolina", badge: "Veteran" },
  { quote: "This isn't about politics. It's about freedom.", name: "Robert H.", location: "Oregon" },
];

export default function TestimonialTicker() {
  return (
    <div className="overflow-hidden bg-gray-dark py-4 border-y border-gray-medium">
      <div className="flex animate-scroll">
        {/* Duplicate testimonials for seamless loop */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div key={index} className="flex-shrink-0 px-8 flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              {testimonial.badge && (
                <span className="bg-accent text-background px-2 py-1 text-xs font-bold rounded">
                  {testimonial.badge}
                </span>
              )}
              <span className="text-gray-light italic">&ldquo;{testimonial.quote}&rdquo;</span>
              <span className="text-accent font-semibold">
                &mdash; {testimonial.name}, {testimonial.location}
              </span>
            </div>
            <span className="text-gray-medium">|</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 60s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
