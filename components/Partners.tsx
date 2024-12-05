import Image from 'next/image';
import Link from 'next/link';

const partners = [
  {
    name: 'Beaconhouse National University',
    logo: '/images/bnu-logo.png',
    url: 'https://www.bnu.edu.pk/',
  },
  {
    name: 'LUMS',
    logo: '/images/lums-logo.png',
    url: 'https://lums.edu.pk/',
  },
  {
    name: 'Oxford University',
    logo: '/images/oxford-logo.png',
    url: 'https://www.ox.ac.uk/',
  },
  {
    name: 'University of Washington',
    logo: '/images/uw-logo.png',
    url: 'https://www.washington.edu/',
  },
  {
    name: 'World Health Organization',
    logo: '/images/who-logo.png',
    url: 'https://www.who.int/',
  },
];

export default function Partners() {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-8">Our Partners</h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {partners.map((partner) => (
          <Link 
            key={partner.name} 
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              fill
              className="object-contain"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}