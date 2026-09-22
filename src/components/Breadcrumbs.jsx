import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-slate-500">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {item.to ? (
              <Link to={item.to} className="hover:text-[#c9a227] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#0a1a2e] font-semibold">{item.label}</span>
            )}
            {i < items.length - 1 && <ChevronRight className="w-3 h-3 text-slate-400" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}