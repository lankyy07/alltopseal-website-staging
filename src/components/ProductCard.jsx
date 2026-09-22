import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";
import { Image } from "@/components/ui/image";

export default function ProductCard({ product }) {
  return (
    <div className="group flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <Link to={`/products/${product.slug}`} className="block relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-full"
          fittingType="fill"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-bold text-[#0a1a2e] mb-1.5">{product.name}</h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{product.tagline}</p>
        <div className="flex flex-col sm:flex-row gap-2.5 mt-auto">
          <Link
            to={`/products/${product.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md border border-slate-300 text-[#0a1a2e] text-sm font-semibold hover:bg-[#f6f2e9] transition-colors"
          >
            View Product <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/request-quote"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md bg-[#0a1a2e] text-white text-sm font-semibold hover:bg-[#0a1a2e]/90 transition-colors"
          >
            <FileText className="w-4 h-4" /> Request Quote
          </Link>
        </div>
      </div>
    </div>
  );
}