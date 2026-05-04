export const SITE = {
  name: "SkyCooling Pune",
  legalName: "SkyCooling Pune Appliance Repair Services",
  title:
    "AC Repair, Appliance Repair & Cooling Solutions in Pune | SkyCooling Pune",
  description:
    "Same-day AC repair, refrigerator repair, washing machine repair, dishwasher service, cold room maintenance, and cooling solution support across Pune and nearby areas.",
  url: "https://skycoolingpune.com",
  phone: "+917770020757",
  phoneDisplay: "+91 77700 20757",
  whatsapp: "917770020757",
  email: "support@skycoolingpune.in",
  address: "Kondhwa, Pune, Maharashtra 411048, India",
  locality: "Pune",
  region: "Maharashtra",
  postalCode: "411048",
  country: "IN",
  hours: "Mon - Sun | 8:00 AM - 9:00 PM",
  geo: {
    latitude: 18.5204,
    longitude: 73.8567,
  },
  socialImage: `${"https://skycoolingpune.com"}/site-preview.svg`,
};

export const telLink = `tel:${SITE.phone}`;

export const whatsappLink = (
  msg = "Hi, I would like to book an appliance repair service in Pune.",
) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const absoluteUrl = (path = "/") =>
  `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
