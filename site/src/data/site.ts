export const site = {
  name: 'Salt Spray Solar',
  url: 'https://saltspraysolar.com',
  description:
    'Robotic solar panel cleaning and thermal drone diagnostic audits across Sydney, the Central Coast and Newcastle.',
  phone: {
    display: '0415 344 558',
    href: 'tel:0415344558',
  },
  email: 'hello@saltspraysolar.com',
  nav: [
    { label: 'Residential', href: '/residential' },
    { label: 'Commercial', href: '/commercial' },
    { label: 'Services', href: '/services' },
    { label: 'Why us', href: '/why-us' },
    { label: 'Areas', href: '/areas' },
    { label: 'FAQ', href: '/faq' },
  ],
  // Where the two main call-to-action buttons go.
  bookHref: '/residential#book',
  assessmentHref: '/commercial#assessment',
  social: {
    facebook: '',
    instagram: '',
  },
  // Paste these in when ready — pages render the real thing as soon as they are set.
  // bookingEmbedUrl: the Calendly (or other booking tool) inline-embed URL for the residential page.
  // mapEmbedUrl: the Google Maps "Embed a map" iframe src for the service-areas page.
  // formAction: a form endpoint (e.g. Formspree) for the commercial assessment form.
  //   While empty, the form opens the visitor's email app addressed to `email`.
  bookingEmbedUrl: '',
  // mapScriptUrl: the src of the map app's embed script (e.g. https://<your-app>.vercel.app/embed-map.js).
  //   When set, the areas page renders <div id="saltspray-map"> and loads that script.
  mapScriptUrl: '',
  mapEmbedUrl: '',
  formAction: '',
} as const;

export type NavItem = (typeof site.nav)[number];
