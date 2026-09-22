import { Link } from "react-router-dom";
import { BookOpen, Ruler, ClipboardList, FileText, Layers, ArrowRight, Download } from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/CtaBanner";
import { company } from "@/lib/siteData";

const resources = [
  {
    icon: Ruler,
    to: "/how-to-measure-a-gasket",
    title: "How to Measure a Gasket",
    text: "Step-by-step guidance on measuring circular, full-face and rectangular gaskets — OD, ID, PCD, bolt holes and more.",
  },
  {
    icon: Layers,
    to: "/how-to-measure-a-gasket",
    title: "Circular Gasket Guide",
    text: "How to specify a circular or flat ring gasket using OD, ID and thickness.",
  },
  {
    icon: FileText,
    to: "/how-to-measure-a-gasket",
    title: "Full-Face Flange Gasket Guide",
    text: "Measuring full-face flange gaskets including PCD, bolt-hole quantity and diameter.",
  },
  {
    icon: Ruler,
    to: "/how-to-measure-a-gasket",
    title: "Rectangular Gasket Guide",
    text: "Specifying rectangular gaskets: length, width, internal opening and hole spacing.",
  },
  {
    icon: ClipboardList,
    to: "/request-quote",
    title: "RFQ Checklist",
    text: "Everything to include in a technical RFQ for a fast, accurate quotation.",
  },
  {
    icon: FileText,
    to: "/request-quote",
    title: "Drawing Submission Guide",
    text: "How to send drawings, photographs and samples — PDF, JPG or PNG accepted.",
  },
  {
    icon: Layers,
    to: "/request-quote",
    title: "Material Selection Support",
    text: "Guidance on selecting a suitable material based on medium, temperature and pressure.",
  },
  {
    icon: Download,
    to: "/request-quote",
    title: "Technical Datasheets",
    text: "Technical datasheets are available on request where supported — ask our technical sales team.",
  },
];

export default function TechnicalResources() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: company.websiteUrl + "/" },
      { "@type": "ListItem", position: 2, name: "Technical Resources", item: company.websiteUrl + "/technical-resources" },
    ],
  };

  return (
    <>
      <Seo
        title="Technical Resources | Gasket Guides & RFQ Support | ALL TOPSEAL"
        description="Technical resources from ALL TOPSEAL: how to measure a gasket, circular and full-face flange guides, rectangular gasket guide, RFQ checklist, drawing submission guide and material selection support."
        jsonLd={jsonLd}
      />

      <section className="bg-[#0a1a2e] text-white">
        <div className="max-w-7xl mx-auto px-4 py-14 lg:py-20">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Technical Resources" }]} />
          <div className="flex items-center gap-3 mt-4 mb-2">
            <BookOpen className="w-6 h-6 text-[#c9a227]" />
            <span className="text-[#c9a227] font-semibold text-sm uppercase tracking-wider">Technical Hub</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black">Technical Resources</h1>
          <p className="mt-4 text-lg text-[#cfdce8] max-w-3xl">
            Practical guidance to help you specify and request the right gasket. Use these resources to
            prepare an accurate RFQ, submit drawings, or measure a gasket for replacement.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {resources.map((r) => (
            <Link
              key={r.title}
              to={r.to}
              className="group rounded-xl border border-slate-200 bg-[#f7f5f0] p-6 hover:shadow-lg hover:border-[#c9a227]/40 transition-all"
            >
              <r.icon className="w-8 h-8 text-[#c9a227] mb-4" />
              <h3 className="font-bold text-[#0a1a2e] mb-1.5 group-hover:text-[#c9a227] transition-colors">{r.title}</h3>
              <p className="text-sm text-slate-600">{r.text}</p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#c9a227] mt-3">
                Open <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}