import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export type BreadcrumbItem = {
  label: string;
  to?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-white/80">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-2"
            >
              {item.to && !isLast ? (
                <Link to={item.to} className="hover:text-white">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "font-semibold text-white" : ""}>
                  {item.label}
                </span>
              )}
              {!isLast ? (
                <ChevronRight className="h-4 w-4 text-white/50" />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
