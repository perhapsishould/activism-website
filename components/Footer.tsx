import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-dark border-t border-gray-medium mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold mb-4">About This Fight</h3>
            <p className="text-gray-light text-sm">
              We're a grassroots movement standing against government overreach and fighting for your freedom.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/why-this-matters" className="text-gray-light hover:text-foreground transition-colors">
                  Why This Matters
                </Link>
              </li>
              <li>
                <Link href="/take-action" className="text-gray-light hover:text-foreground transition-colors">
                  Take Action
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-light hover:text-foreground transition-colors">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-light hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* For Our Supporters */}
          <div>
            <h3 className="font-bold mb-4">For Our Supporters</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/for-farmers" className="text-gray-light hover:text-foreground transition-colors">
                  For Farmers
                </Link>
              </li>
              <li>
                <Link href="/for-veterans" className="text-gray-light hover:text-foreground transition-colors">
                  For Veterans
                </Link>
              </li>
              <li>
                <Link href="/for-freedom" className="text-gray-light hover:text-foreground transition-colors">
                  For Freedom
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-gray-light hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li className="text-gray-light">
                info@protectourfreedom.org
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-medium text-center text-gray-light text-sm">
          <p>&copy; {new Date().getFullYear()} Protect Our Freedom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
