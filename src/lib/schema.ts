import { AREAS_WE_SERVE } from "@/data/locations";
import type { ServiceItem } from "@/data/services";
import { SITE, absoluteUrl } from "@/lib/site";

type BreadcrumbItem = {
  name: string;
  path: string;
};

export const buildLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  legalName: SITE.legalName,
  image: SITE.socialImage,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address,
    addressLocality: SITE.locality,
    addressRegion: SITE.region,
    postalCode: SITE.postalCode,
    addressCountry: SITE.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  areaServed: AREAS_WE_SERVE.map((area) => ({
    "@type": "City",
    name: area,
  })),
  openingHours: "Mo-Su 08:00-21:00",
  priceRange: "INR",
  sameAs: [SITE.url],
});

export const buildBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const buildFaqSchema = (service: ServiceItem) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: service.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const buildServiceSchema = (service: ServiceItem) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: service.serviceType,
  name: service.title,
  description: service.metaDescription,
  areaServed: AREAS_WE_SERVE.map((area) => ({
    "@type": "City",
    name: area,
  })),
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.locality,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: absoluteUrl(`/services/${service.slug}`),
    availableLanguage: ["en", "hi", "mr"],
  },
  url: absoluteUrl(`/services/${service.slug}`),
});
