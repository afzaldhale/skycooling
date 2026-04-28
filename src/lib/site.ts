export const SITE = {
  name: "skycoolingpune — AC & Home Appliance Services",
  phone: "+917770020757",
  phoneDisplay: "+91 77700 20757",
  whatsapp: "917770020757",
  email: "support@skycoolingpune.in",
  address: "Kondhwa, Pune, Maharashtra 411048, India",
  hours: "Mon – Sun · 8:00 AM – 9:00 PM",
};

export const whatsappLink = (msg = "Hi, I'd like to book an appliance repair.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${SITE.phone}`;