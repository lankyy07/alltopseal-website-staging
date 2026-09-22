import { Link } from "react-router-dom";
import { FileText, MessageCircle, Send, Ruler, Layers, PencilRuler, Package, ClipboardList, Check } from "lucide-react";
import { Image } from "@/components/ui/image";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/CtaBanner";
import { CircularGasketDiagram, FullFaceGasketDiagram, RectangularGasketDiagram } from "@/components/GasketDiagram";
import { getProduct, products, images, company, waLink, mailLink } from "@/lib/siteData";

const product = getProduct("custom-gaskets");

export default function CustomGaskets() {
  const workflow = [
    { icon: ClipboardList, label: "Requirement", text: "Share your drawing, dimensions, photograph or sample." },
    { icon: PencilRuler, label: "Drawing Review", text: "We review the specification and confirm details with you." },
    { icon: Layers, label: "Material Selection", text: "A suitable material is recommended for your service conditions." },
    { icon: Ruler, label: "Fabrication", text: "Gaskets are cut to your exact profile and dimensions." },
    { icon: Package, label: "Supply", text: "Finished gaskets are packed and supplied to your location." },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: company.websiteUrl + "/" },
      { "@type": "ListItem", position: 2, name: "Custom Gaskets", item: company.websiteUrl + "/products/custom-gaskets" },
    ],
  };

  return (
    <>
      <Seo title={product.seo.title} description={product.seo.description} jsonLd={jsonLd} />

      {/* Hero */}
      <section className="relative bg-[#0a1a2e] overflow-hidden">
        <div className="absolute inset-0">
          <Image src={images.customGaskets} alt="Custom cut industrial gaskets with technical drawing" className="w-full h-full" fittingType="fill" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a2e] via-[#0a1a2e]/90 to-[#0a1a2e]/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-14 lg:py-20">
          <div className="max-w-2xl">
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Products", to: "/products" },
                { label: "Custom Gaskets" },
              ]}
            />
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Custom Gaskets from Drawings, Dimensions or Samples
            </h1>
            <p className="mt-4 text-lg text-[#cfdce8]">{product.overview}</p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link to="/request-quote" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#c9a227] hover:bg-[#b8901f] text-[#0a1a2e] font-bold transition-colors">
                <Send className="w-5 h-5" /> Send Your Drawing
              </Link>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-white/30 text-white hover:bg-white/10 font-bold transition-colors">
                <MessageCircle className="w-5 h-5" /> WhatsApp Technical Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-2">
              <PencilRuler className="w-4 h-4" /> The Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a1a2e]">Requirement → Drawing Review → Material Selection → Fabrication → Supply</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {workflow.map((step, i) => (
              <div key={step.label} className="relative rounded-xl border border-slate-200 bg-[#f7f5f0] p-5 text-center">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#c9a227] text-[#0a1a2e] flex items-center justify-center text-sm font-black">
                  {i + 1}
                </div>
                <step.icon className="w-8 h-8 text-[#0a1a2e] mx-auto my-3" />
                <div className="font-bold text-[#0a1a2e] text-sm">{step.label}</div>
                <p className="text-xs text-slate-600 mt-1.5">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circular requirements */}
      <section className="py-14 lg:py-20 bg-[#f7f5f0]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <CircularGasketDiagram />
            <div className="mt-4 border-t border-slate-100 pt-4">
              <FullFaceGasketDiagram />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-black text-[#0a1a2e] mb-4">Circular Gasket Requirements</h2>
            <p className="text-slate-600 mb-6">For circular and full-face flange gaskets, please provide:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["OD (outside diameter)", "ID (inside diameter)", "Thickness", "PCD (pitch circle diameter)", "Bolt-hole diameter", "Bolt-hole quantity", "Material", "Quantity"].map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-sm text-slate-700 bg-white border border-slate-200 rounded-lg px-4 py-2.5">
                  <Check className="w-4 h-4 text-[#c9a227] shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Rectangular requirements */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-black text-[#0a1a2e] mb-4">Rectangular Gasket Requirements</h2>
            <p className="text-slate-600 mb-6">For rectangular and frame gaskets, please provide:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Overall length", "Overall width", "Internal opening", "Thickness", "Hole spacing", "Material", "Quantity"].map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-sm text-slate-700 bg-[#f7f5f0] border border-slate-200 rounded-lg px-4 py-2.5">
                  <Check className="w-4 h-4 text-[#c9a227] shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2 rounded-2xl border border-slate-200 bg-[#f7f5f0] p-8">
            <RectangularGasketDiagram />
          </div>
        </div>
      </section>

      {/* Other profiles */}
      <section className="py-14 lg:py-20 bg-[#0a1a2e] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-black mb-2">Other Custom Profiles</h2>
          <div className="w-12 h-1 bg-[#c9a227] mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { t: "Double-Window Gaskets", d: "Twin-window profiles for sight glasses and specialised equipment." },
              { t: "Manhole & Handhole Gaskets", d: "Large-diameter cover gaskets for boilers, vessels and tanks." },
              { t: "Equipment Gaskets", d: "Gaskets fabricated to specific equipment references and tag numbers." },
              { t: "Irregular Profiles", d: "Non-standard shapes cut from samples or drawings." },
              { t: "Cooler / Heat-Exchanger Gaskets", d: "Custom gaskets for coolers and heat exchangers." },
              { t: "Reverse-Engineering from Samples", d: "Send a physical sample and we replicate the profile." },
            ].map((p) => (
              <div key={p.t} className="rounded-xl bg-white/5 border border-white/10 p-6 hover:border-[#c9a227]/40 transition-colors">
                <h3 className="font-bold text-[#c9a227] mb-2">{p.t}</h3>
                <p className="text-sm text-[#cfdce8]">{p.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link to="/request-quote" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#c9a227] hover:bg-[#b8901f] text-[#0a1a2e] font-bold transition-colors">
              <Send className="w-5 h-5" /> Send Your Drawing
            </Link>
            <a href={mailLink} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-white/30 text-white hover:bg-white/10 font-bold transition-colors">
              Email: {company.email}
            </a>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-black text-[#0a1a2e] mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.filter((p) => ["flange-gaskets", "non-asbestos-gasket-sheets", "gland-packing"].includes(p.slug)).map((p) => (
              <Link key={p.slug} to={`/products/${p.slug}`} className="group flex gap-4 bg-[#f7f5f0] rounded-xl border border-slate-200 p-4 hover:shadow-lg transition-all">
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-slate-200 shrink-0">
                  <Image src={p.image} alt={p.name} className="w-full h-full" fittingType="fill" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a1a2e] group-hover:text-[#c9a227] transition-colors">{p.name}</h3>
                  <p className="text-xs text-slate-600 mt-1">{p.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Have a Custom Gasket Requirement?" subtitle="Send your drawing, dimensions, photograph or sample — we'll quote it." />
    </>
  );
}