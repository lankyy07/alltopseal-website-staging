import { Link } from "react-router-dom";
import { Check, ArrowRight, FileText, MessageCircle, Mail, Ruler } from "lucide-react";
import { Image } from "@/components/ui/image";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/CtaBanner";
import { products, company, waLink, mailLink } from "@/lib/siteData";

export default function ProductPageTemplate({ product }) {
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: company.websiteUrl + "/" },
      { "@type": "ListItem", position: 2, name: "Products", item: company.websiteUrl + "/products" },
      { "@type": "ListItem", position: 3, name: product.name, item: company.websiteUrl + "/products/" + product.slug },
    ],
  };

  return (
    <>
      <Seo title={product.seo.title} description={product.seo.description} jsonLd={jsonLd} />

      {/* Hero */}
      <section className="relative bg-[#0a1a2e] overflow-hidden">
        <div className="absolute inset-0">
          <Image src={product.image} alt={product.name} className="w-full h-full" fittingType="fill" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a2e] via-[#0a1a2e]/90 to-[#0a1a2e]/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-14 lg:py-20">
          <div className="max-w-2xl">
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Products", to: "/products" },
                { label: product.name },
              ]}
            />
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              {product.name}
            </h1>
            <p className="mt-4 text-lg text-[#cfdce8]">{product.tagline}</p>
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
        </div>
      </section>

      {/* Overview */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
            <Image src={product.image} alt={product.name} className="w-full aspect-[4/3]" fittingType="fill" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-[#0a1a2e] mb-4">Overview</h2>
            <p className="text-slate-700 leading-relaxed text-base">{product.overview}</p>
            <div className="mt-6 rounded-lg bg-[#f6f2e9] border border-[#e6dcc4] p-5">
              <p className="text-sm text-slate-700">
                All orders and technical RFQs should be sent to{" "}
                <a href={mailLink} className="font-semibold text-[#0a1a2e] underline underline-offset-2">
                  {company.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications & Forms */}
      <section className="py-14 lg:py-20 bg-[#f7f5f0]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-xl border border-slate-200 p-7">
            <h3 className="text-xl font-bold text-[#0a1a2e] mb-5">Typical Applications</h3>
            <ul className="space-y-3">
              {product.applications.map((a) => (
                <li key={a} className="flex gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-[#c9a227] shrink-0 mt-0.5" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-7">
            <h3 className="text-xl font-bold text-[#0a1a2e] mb-5">Available Forms &amp; Sizes</h3>
            <ul className="space-y-3">
              {product.forms.map((f) => (
                <li key={f} className="flex gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-[#c9a227] shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How to request a quote */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-2">
              <Ruler className="w-4 h-4" /> How to Request a Quote
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a1a2e]">Information to Provide</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {product.requestInfo.map((info) => (
              <div
                key={info}
                className="flex items-center gap-3 bg-[#f7f5f0] border border-[#e6dcc4] rounded-lg px-4 py-3 text-sm text-slate-800 font-medium"
              >
                <span className="w-6 h-6 rounded-full bg-[#c9a227] text-[#0a1a2e] flex items-center justify-center text-xs font-black shrink-0">
                  ✓
                </span>
                {info}
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-[#0a1a2e] text-white font-bold hover:bg-[#0a1a2e]/90 transition-colors"
            >
              <FileText className="w-5 h-5" /> Submit Technical RFQ <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Technical notes */}
      <section className="py-14 lg:py-20 bg-[#0a1a2e] text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-black mb-2">Technical Notes</h2>
          <div className="w-12 h-1 bg-[#c9a227] mb-7" />
          <ul className="space-y-4">
            {product.technicalNotes.map((n) => (
              <li key={n} className="flex gap-3 text-[#cfdce8] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] mt-2.5 shrink-0" />
                <span>{n}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-center gap-2 text-sm text-[#9fb3c8]">
            <Mail className="w-4 h-4 text-[#c9a227]" />
            Technical queries: <a href={mailLink} className="text-white underline underline-offset-2">{company.email}</a>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-black text-[#0a1a2e] mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="group flex gap-4 bg-[#f7f5f0] rounded-xl border border-slate-200 p-4 hover:shadow-lg transition-all"
              >
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-slate-200 shrink-0">
                  <Image src={p.image} alt={p.name} className="w-full h-full" fittingType="fill" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-[#0a1a2e] group-hover:text-[#c9a227] transition-colors">{p.name}</h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">{p.tagline}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#c9a227] mt-2">
                    View Product <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}