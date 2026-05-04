import { useEffect } from "react";
import { SITE, absoluteUrl } from "@/lib/site";

type SEOHeadProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noindex?: boolean;
  type?: "website" | "article";
  structuredData?: Record<string, unknown>[];
};

const ensureMeta = (
  selector: string,
  attributes: Record<string, string>,
  content: string,
) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) =>
      element?.setAttribute(key, value),
    );
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const ensureLink = (rel: string, href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(
    `link[rel="${rel}"]`,
  );
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
};

export function SEOHead({
  title,
  description,
  path = "/",
  image,
  keywords = [],
  noindex = false,
  type = "website",
  structuredData = [],
}: SEOHeadProps) {
  useEffect(() => {
    const url = absoluteUrl(path);
    const socialImage = image
      ? image.startsWith("http")
        ? image
        : absoluteUrl(image)
      : SITE.socialImage;

    document.title = title;

    ensureMeta(
      'meta[name="description"]',
      { name: "description" },
      description,
    );
    ensureMeta(
      'meta[name="keywords"]',
      { name: "keywords" },
      keywords.join(", "),
    );
    ensureMeta(
      'meta[name="robots"]',
      { name: "robots" },
      noindex ? "noindex, nofollow" : "index, follow",
    );
    ensureMeta('meta[name="author"]', { name: "author" }, SITE.name);
    ensureMeta('meta[name="geo.region"]', { name: "geo.region" }, "IN-MH");
    ensureMeta(
      'meta[name="geo.placename"]',
      { name: "geo.placename" },
      `${SITE.locality}, ${SITE.region}`,
    );
    ensureMeta(
      'meta[name="geo.position"]',
      { name: "geo.position" },
      `${SITE.geo.latitude};${SITE.geo.longitude}`,
    );
    ensureMeta(
      'meta[name="ICBM"]',
      { name: "ICBM" },
      `${SITE.geo.latitude}, ${SITE.geo.longitude}`,
    );

    ensureMeta('meta[property="og:title"]', { property: "og:title" }, title);
    ensureMeta(
      'meta[property="og:description"]',
      { property: "og:description" },
      description,
    );
    ensureMeta('meta[property="og:type"]', { property: "og:type" }, type);
    ensureMeta('meta[property="og:url"]', { property: "og:url" }, url);
    ensureMeta(
      'meta[property="og:site_name"]',
      { property: "og:site_name" },
      SITE.name,
    );
    ensureMeta(
      'meta[property="og:image"]',
      { property: "og:image" },
      socialImage,
    );

    ensureMeta(
      'meta[name="twitter:card"]',
      { name: "twitter:card" },
      "summary_large_image",
    );
    ensureMeta('meta[name="twitter:title"]', { name: "twitter:title" }, title);
    ensureMeta(
      'meta[name="twitter:description"]',
      { name: "twitter:description" },
      description,
    );
    ensureMeta(
      'meta[name="twitter:image"]',
      { name: "twitter:image" },
      socialImage,
    );

    ensureLink("canonical", url);

    document
      .querySelectorAll('script[data-seo-structured="true"]')
      .forEach((node) => node.remove());

    structuredData.forEach((schema, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoStructured = "true";
      script.dataset.schemaIndex = String(index);
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [
    description,
    image,
    keywords,
    noindex,
    path,
    structuredData,
    title,
    type,
  ]);

  return null;
}
