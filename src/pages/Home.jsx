import { Link } from "react-router-dom";
import {
  ClipboardList, Ruler, Package, MessageCircle, FileText, ArrowRight, Send,
  Flame, Zap, FlaskConical, Anchor, Factory, Droplets, Mountain, Wind,
  UtensilsCrossed, Wrench, BookOpen, CheckCircle2, Layers, PencilRuler,
} from "lucide-react";
import { Image } from "@/components/ui/image";
import Seo from "@/components/Seo";
import ProductCard from "@/components/ProductCard";
import CtaBanner from "@/components/CtaBanner";
import { products, industries, trustBlocks, images, company, waLink, mailLink } from "@/lib/siteData";

const iconMap = {
  ClipboardList, Ruler, Package, MessageCircle,
  Flame, Zap, FlaskConical, Anchor, Factory, Droplets, Mountain, Wind,
  UtensilsCrossed, Wrench,
};

export default function Home() {
  const featured = products.filter((p) =>
    ["flange-gaskets", "custom-gaskets", "non-asbestos-gasket-sheets", "sbr-rubber-sheets", "rubberised-cork", "gland-packing", "spiral-wound-gaskets"].includes(p.slug)
  );
  const workflow = [
    { icon: ClipboardList, label: "Requirement", text: "You share the drawing, dimensions, photo or sample." },
    { icon: PencilRuler, label: "Drawing Review", text: "Our team reviews specifications and confirms details." },
    { icon: Layers, label: "Material Selection", text: "We recommend a suitable material for your service conditions." },
    { icon: Ruler, label: "Fabrication", text: "Gaskets are cut to your exact profile and dimensions." },
    { icon: Package, label: "Supply", text: "Finished gaskets are packed and supplied to your location." },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Emma Onyeco Investment Company Limited",
    alternateName: "ALL TOPSEAL",
    url: company.websiteUrl,
    email: company.email,
    telephone: "+" + company.whatsapp,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Zone D, Block 5, Shop 79, ASPAMDA, Lagos International Trade Fair Complex, Lagos-Badagry Expressway",
      addressLocality: "Lagos",
      addressRegion: "Lagos State",
      addressCountry: "NG",
    },
  };

  return (
    <>
      <Seo
        title="ALL TOPSEAL | Industrial Gaskets & Sealing Materials Lagos, Nigeria"
        description="ALL TOPSEAL supplies industrial sealing materials and custom gasket fabrication from drawings, dimensions, photographs or samples. Flange gaskets, spiral wound gaskets, gasket sheets, rubber, cork and gland packing for B2B buyers in Lagos, Nigeria."
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative bg-[#0a1a2e] overflow-hidden">
        <div className="absolute inset-0">
          <Image src={images.hero} alt="Industrial flange gaskets and gasket sheet materials on a fabrication workbench" className="w-full h-full" fittingType="fill" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a2e] via-[#0a1a2e]/85 to-[#0a1a2e]/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-[#c9a227]/20 border border-[#c9a227]/40 text-[#e8c14a] text-xs font-semibold uppercase tracking-wider mb-5">
              {company.legalName} — Trading as ALL TOPSEAL
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1]">
              Industrial Sealing Solutions for Procurement, Engineering &amp; Maintenance Teams
            </h1>
            <p className="mt-5 text-lg text-[#cfdce8] leading-relaxed">
              Wholesale supply of industrial sealing materials and custom gasket fabrication from
              drawings, dimensions, photographs or physical samples — for industrial plants, oil &amp; gas,
              marine, power generation and manufacturing.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/request-quote"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#c9a227] hover:bg-[#b8901f] text-[#0a1a2e] font-bold transition-colors shadow-lg"
              >
                <FileText className="w-5 h-5" /> Request a Quote
              </Link>
              <Link
                to="/products/custom-gaskets"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-white/10 border border-white/30 text-white hover:bg-white/20 font-bold transition-colors backdrop-blur"
              >
                <Send className="w-5 h-5" /> Send Drawing / Sample
              </Link>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Technical Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-[#07131f] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustBlocks.map((b) => {
            const Icon = iconMap[b.icon] || ClipboardList;
            return (
              <div key={b.title} className="flex flex-col items-start gap-3">
                <div className="w-11 h-11 rounded-lg bg-[#c9a227]/15 border border-[#c9a227]/30 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#c9a227]" />
                </div>
                <h3 className="text-white font-bold text-sm sm:text-base">{b.title}</h3>
                <p className="text-[#9fb3c8] text-xs sm:text-sm leading-relaxed">{b.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Two customer paths */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a1a2e]">Two Ways We Can Help</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Whether you need wholesale material supply or a one-off custom gasket, we support both paths.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-[#f7f5f0] p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-[#0a1a2e] flex items-center justify-center mb-5">
                <Package className="w-6 h-6 text-[#c9a227]" />
              </div>
              <h3 className="text-xl font-black text-[#0a1a2e] mb-2">Wholesale Material Supply</h3>
              <p className="text-slate-600 mb-5">For buyers looking for bulk and stock supply of:</p>
              <ul className="space-y-2 mb-6">
                {["Gasket sheets", "Rubberised cork", "Rubber sheets", "Gland packing", "Spiral wound gaskets", "Bulk industrial supply"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#c9a227] shrink-0" /> {t}
                  </li>
                ))}
              </ul>
              <Link to="/products" className="inline-flex items-center gap-1.5 text-[#0a1a2e] font-bold hover:text-[#c9a227] transition-colors">
                View Products <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[#0a1a2e] text-white p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-[#c9a227] flex items-center justify-center mb-5">
                <PencilRuler className="w-6 h-6 text-[#0a1a2e]" />
              </div>
              <h3 className="text-xl font-black mb-2">Custom Gasket Fabrication</h3>
              <p className="text-[#cfdce8] mb-5">For customers with:</p>
              <ul className="space-y-2 mb-6">
                {["Technical drawings", "Dimensions", "Photographs", "Physical samples", "Unusual gasket profiles"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-[#cfdce8]">
                    <CheckCircle2 className="w-4 h-4 text-[#c9a227] shrink-0" /> {t}
                  </li>
                ))}
              </ul>
              <Link to="/products/custom-gaskets" className="inline-flex items-center gap-1.5 text-[#c9a227] font-bold hover:text-white transition-colors">
                Custom Gaskets <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-16 lg:py-24 bg-[#f7f5f0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a1a2e]">Featured Products</h2>
              <p className="mt-2 text-slate-600">Core industrial sealing products supplied on a quotation basis.</p>
            </div>
            <Link to="/products" className="inline-flex items-center gap-1.5 text-[#0a1a2e] font-bold hover:text-[#c9a227] transition-colors">
              View all products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom gasket workflow */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <Image src={images.customGaskets} alt="Custom cut industrial gaskets with technical drawing" className="w-full aspect-[4/3]" fittingType="fill" />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-3">
                <PencilRuler className="w-4 h-4" /> Custom Gasket Fabrication
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a1a2e] leading-tight">
                From Technical Drawing to Industrial Gasket
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We work from drawings, dimensions, photographs or physical samples to fabricate gaskets
                in circular, rectangular, double-window, manhole and irregular profiles.
              </p>
              <div className="mt-8 space-y-4">
                {workflow.map((step, i) => (
                  <div key={step.label} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-[#0a1a2e] text-[#c9a227] flex items-center justify-center shrink-0">
                        <step.icon className="w-5 h-5" />
                      </div>
                      {i < workflow.length - 1 && <div className="w-px h-6 bg-slate-300 mt-1" />}
                    </div>
                    <div className="pt-1.5">
                      <div className="font-bold text-[#0a1a2e] text-sm">{step.label}</div>
                      <div className="text-sm text-slate-600">{step.text}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/products/custom-gaskets"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#0a1a2e] text-white font-bold hover:bg-[#0a1a2e]/90 transition-colors"
              >
                Explore Custom Gaskets <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 lg:py-24 bg-[#07131f] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black">Industries We Supply</h2>
            <p className="mt-3 text-[#9fb3c8] max-w-2xl mx-auto">
              Sealing solutions for demanding industrial sectors across Nigeria and beyond.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((ind) => {
              const Icon = iconMap[ind.icon] || Factory;
              return (
                <Link
                  key={ind.name}
                  to="/industries"
                  className="group rounded-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 hover:border-[#c9a227]/40 transition-all"
                >
                  <Icon className="w-7 h-7 text-[#c9a227] mb-3" />
                  <div className="font-bold text-sm leading-tight">{ind.name}</div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/industries" className="inline-flex items-center gap-1.5 text-[#c9a227] font-bold hover:text-white transition-colors">
              View all industries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Technical resources */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4" /> Technical Resources
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a1a2e]">Guides &amp; Support</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { to: "/how-to-measure-a-gasket", title: "How to Measure a Gasket", text: "OD, ID, PCD and bolt-hole dimensions explained." },
              { to: "/technical-resources", title: "RFQ Checklist", text: "What to include in a technical RFQ." },
              { to: "/technical-resources", title: "Drawing Submission Guide", text: "How to send drawings, photos and samples." },
              { to: "/technical-resources", title: "Material Selection Support", text: "Guidance based on your service conditions." },
            ].map((r) => (
              <Link
                key={r.title}
                to={r.to}
                className="group rounded-xl border border-slate-200 bg-[#f7f5f0] p-6 hover:shadow-lg hover:border-[#c9a227]/40 transition-all"
              >
                <FileText className="w-7 h-7 text-[#c9a227] mb-4" />
                <h3 className="font-bold text-[#0a1a2e] mb-1.5 group-hover:text-[#c9a227] transition-colors">{r.title}</h3>
                <p className="text-sm text-slate-600">{r.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Company credibility */}
      <section className="py-16 lg:py-24 bg-[#f7f5f0]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#0a1a2e] text-[#c9a227] text-xs font-semibold uppercase tracking-wider mb-4">
              About the Company
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a1a2e] mb-4">
              {company.legalName}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Trading as <strong className="text-[#0a1a2e]">ALL TOPSEAL</strong>, we supply industrial
              sealing materials and custom gasket solutions to procurement teams, engineers and
              maintenance professionals across Nigeria.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Based at ASPAMDA, Lagos International Trade Fair Complex, we combine reliable industrial
              sourcing with technical support and responsive customer service — building long-term B2B
              relationships around practical sealing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/about" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#0a1a2e] text-white font-bold hover:bg-[#0a1a2e]/90 transition-colors">
                About Us <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={mailLink} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-slate-300 text-[#0a1a2e] font-bold hover:bg-white transition-colors">
                {company.email}
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
            <Image src={images.fabrication} alt="Engineering fabrication workstation with calipers and gasket materials" className="w-full aspect-[4/3]" fittingType="fill" />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}