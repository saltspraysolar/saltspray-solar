export const site = {
  name: 'SaltSpray Solar',
  url: 'https://saltspraysolar.com',
  description:
    'SaltSpray Solar cleans residential and commercial solar panels across Sydney, the Central Coast and Newcastle using pure, deionised water for a spot-free finish.',
  phone: {
    display: '0455 010 220',
    href: 'tel:0455010220',
  },
  email: 'hello@saltspraysolar.com',
  nav: [
    { label: 'Services', href: '/services' },
    { label: 'Why us', href: '/why-us' },
    { label: 'Results', href: '/results' },
    { label: 'Areas', href: '/areas' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Book now', href: '/book' },
  ],
  social: {
    facebook: '',
    instagram: '',
  },
  // Replace with the real Calendly link and Stripe Payment Link when ready.
  calendlyUrl: '',
  quoteHref: '/book',
} as const;

export type NavItem = (typeof site.nav)[number];
