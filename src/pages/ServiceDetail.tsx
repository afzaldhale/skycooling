import { useParams } from "react-router-dom";
import { SEOHead } from "@/components/site/SEOHead";
import { ServiceDetailPage } from "@/components/site/ServiceDetailPage";
import { SERVICE_MAP } from "@/data/services";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildServiceSchema,
} from "@/lib/schema";
import NotFound from "@/pages/NotFound";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = slug ? SERVICE_MAP[slug] : undefined;

  if (!service) {
    return <NotFound />;
  }

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.shortTitle, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <SEOHead
        title={service.seoTitle}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
        image={service.image}
        keywords={service.keywords}
        structuredData={[
          buildLocalBusinessSchema(),
          buildServiceSchema(service),
          buildFaqSchema(service),
          buildBreadcrumbSchema(breadcrumbItems),
        ]}
      />
      <ServiceDetailPage service={service} />
    </>
  );
}
