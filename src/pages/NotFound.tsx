import { Link } from "react-router-dom";
import { SEOHead } from "@/components/site/SEOHead";

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="Page Not Found | SkyCooling Pune"
        description="The page you are looking for could not be found."
        path="/404"
        noindex
      />
      <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
        <div className="max-w-md rounded-[2rem] bg-card p-10 text-center shadow-soft ring-1 ring-border">
          <h1 className="text-7xl font-bold text-navy">404</h1>
          <h2 className="mt-4 text-2xl font-semibold text-navy">
            Page not found
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            The page you are looking for does not exist or may have moved to a
            different service URL.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-gradient-cta px-5 py-3 text-sm font-semibold text-cta-foreground"
            >
              Go to homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
