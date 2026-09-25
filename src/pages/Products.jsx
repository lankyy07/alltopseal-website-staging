import { Link } from "react-router-dom";
import { ArrowRight, FileText, MessageCircle } from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import CtaBanner from "@/components/CtaBanner";
import { products, waLink, company } from "@/lib/siteData";

export default function Products() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: company.websiteUrl + "/" },
      { "@type": "ListItem", position: 2, name: "Products", item: company.websiteUrl + "/products" },
    ],
  };

  return (
    <>
      <Seo
        title="Industrial Sealing Products Nigeria | ALL TOPSEAL"
        description="Browse our catalogue of industrial sealing products: flange gaskets, spiral wound gaskets, custom gasket fabrication, non-asbestos sheets, SBR rubber, rubberised cork, gland packing and sealing rope. ALL TOPSEAL, Lagos."
        jsonLd={jsonLd}
      />

      <section className="bg-[#0a1a2e] text-white">
        <div className="max-w-7xl mx-auto px-4 py-14 lg:py-20">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Products" }]} />
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black">Industrial Sealing Products</h1>
          <p className="mt-4 text-lg text-[#cfdce8] max-w-3xl">
            A focused range of industrial sealing materials and custom gasket solutions for procurement
            teams, engineers and maintenance professionals. All products are supplied on a quotation
            basis — send your requirements for a technical quotation.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link
              to="/request-quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#c9a227] hover:bg-[#b8901f] text-[#0a1a2e] font-bold transition-colors"
            >
              <FileText className="w-5 h-5" /> Request a Quote
            </Link>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-white/30 text-white hover:bg-white/10 font-bold transition-colors"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Technical Sales
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}