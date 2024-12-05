import { Globe2 } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Globe2 className="h-6 w-6" />
              <span className="font-bold">IBDEMS</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering health and environmental awareness through real-time
              data analysis. Our platform helps you stay informed and make
              proactive decisions to improve public health and environmental
              sustainability.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/gbd" className="text-sm text-muted-foreground hover:text-primary">
                  Global Burden of Diseases
                </Link>
              </li>
              <li>
                <Link href="/earth-observation" className="text-sm text-muted-foreground hover:text-primary">
                  Earth Observation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} IBDEMS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}