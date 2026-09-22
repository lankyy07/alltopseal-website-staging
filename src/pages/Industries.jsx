import {
  Flame, Zap, FlaskConical, Anchor, Factory, Droplets, Mountain, Wind,
  UtensilsCrossed, Wrench, ArrowRight, Check,
} from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/CtaBanner";
import { industries, images, company } from "@/lib/siteData";

const iconMap = {
  Flame, Zap, FlaskConical, Anchor, Factory, Droplets, Mountain, Wind,
  UtensilsCrossed, Wrench,
};

export default function Industries() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: company.websiteUrl + "/" },
      { "@type": "ListItem", position: 2, name: "Industries", item: company.websiteUrl + "/industries" },
    ],
  };

  return (
    <>
      <Seo
        title="Industries We Supply | Industrial Sealing Solutions Nigeria | ALL TOPSEAL"
        description="Industrial sealing solutions for oil & gas, power generation, petrochemical, marine, manufacturing, water treatment, mining, HVAC, food processing and engineering maintenance. ALL TOPSEAL, Lagos."
        jsonLd={jsonLd}
      />

      <section className="relative bg-[#0a1a2e] overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.industrialPlant} alt="Industrial plant" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a2e] via-[#0a1a2e]/85 to-[#0a1a2e]/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-14 lg:py-20">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Industries" }]} />
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white">Industries We Supply</h1>
          <p className="mt-4 text-lg text-[#cfdce8] max-w-3xl">
            We supply industrial sealing materials and custom gasket solutions across demanding sectors.
            For each industry, correct technical specification matters — share your service conditions for
            material selection guidance.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((ind) => {
            const Icon = iconMap[ind.icon] || Factory;
            return (
              <div key={ind.name} className="rounded-2xl border border-slate-200 bg-[#f7f5f0] p-7 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0a1a2e] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#c9a227]" />
                  </div>
                  <h2 className="text-xl font-black text-[#0a1a2e]">{ind.name}</h2>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">{ind.sealing}</p>
                <div className="mb-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#c9a227] mb-2">Likely Products</div>
                  <div className="flex flex-wrap gap-2">
                    {ind.products.map((p) => (
                      <span key={p} className="text-xs font-medium bg-white border border-slate-200 rounded-full px-3 py-1 text-slate-700">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2.5 pt-3 border-t border-slate-200">
                  <Check className="w-4 h-4 text-[#c9a227] shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600">{ind.why}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}