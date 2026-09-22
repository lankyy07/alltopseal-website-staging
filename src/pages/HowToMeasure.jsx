import { Link } from "react-router-dom";
import { Send, MessageCircle, FileText, Check } from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/CtaBanner";
import { CircularGasketDiagram, FullFaceGasketDiagram, RectangularGasketDiagram } from "@/components/GasketDiagram";
import { company, waLink } from "@/lib/siteData";

const sections = [
  {
    diagram: <CircularGasketDiagram />,
    title: "Circular / Flat Ring Gasket",
    points: [
      { label: "OD", desc: "Outside diameter — the full outer edge of the gasket." },
      { label: "ID", desc: "Inside diameter — the inner opening of the gasket." },
      { label: "Thickness", desc: "The thickness of the gasket material." },
    ],
  },
  {
    diagram: <FullFaceGasketDiagram />,
    title: "Full-Face Flange Gasket",
    points: [
      { label: "OD", desc: "Outside diameter of the gasket." },
      { label: "ID", desc: "Inside diameter (inner opening)." },
      { label: "PCD", desc: "Pitch circle diameter — the circle through the centre of the bolt holes." },
      { label: "Bolt-hole quantity", desc: "The total number of bolt holes." },
      { label: "Bolt-hole diameter", desc: "The diameter of each bolt hole." },
    ],
  },
  {
    diagram: <RectangularGasketDiagram />,
    title: "Rectangular Gasket",
    points: [
      { label: "Overall length", desc: "The total outer length of the gasket." },
      { label: "Overall width", desc: "The total outer width of the gasket." },
      { label: "Internal opening", desc: "The size of the inner cut-out." },
      { label: "Thickness", desc: "The thickness of the gasket material." },
      { label: "Holes / pitch", desc: "The position and spacing of any bolt holes." },
    ],
  },
];

export default function HowToMeasure() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: company.websiteUrl + "/" },
      { "@type": "ListItem", position: 2, name: "Technical Resources", item: company.websiteUrl + "/technical-resources" },
      { "@type": "ListItem", position: 3, name: "How to Measure a Gasket", item: company.websiteUrl + "/how-to-measure-a-gasket" },
    ],
  };

  return (
    <>
      <Seo
        title="How to Measure a Gasket | OD, ID, PCD & Bolt Holes | ALL TOPSEAL"
        description="Learn how to measure a gasket for replacement: circular gasket OD and ID, full-face flange gasket PCD and bolt holes, and rectangular gasket dimensions. Visual diagrams from ALL TOPSEAL."
        jsonLd={jsonLd}
      />

      <section className="bg-[#0a1a2e] text-white">
        <div className="max-w-7xl mx-auto px-4 py-14 lg:py-20">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Technical Resources", to: "/technical-resources" },
              { label: "How to Measure a Gasket" },
            ]}
          />
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black">How to Measure a Gasket</h1>
          <p className="mt-4 text-lg text-[#cfdce8] max-w-3xl">
            Use these diagrams to measure your gasket before requesting a quotation. Accurate dimensions
            help us fabricate the right gasket the first time. Where you are unsure, send a sample or
            photograph and we will assist.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          {sections.map((s, i) => (
            <div key={s.title} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className={`rounded-2xl border border-slate-200 bg-[#f7f5f0] p-8 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                {s.diagram}
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#c9a227] text-[#0a1a2e] font-black mb-4">
                  {i + 1}
                </span>
                <h2 className="text-2xl font-black text-[#0a1a2e] mb-4">{s.title}</h2>
                <ul className="space-y-3">
                  {s.points.map((p) => (
                    <li key={p.label} className="flex gap-3">
                      <Check className="w-5 h-5 text-[#c9a227] shrink-0 mt-0.5" />
                      <span className="text-slate-700">
                        <strong className="text-[#0a1a2e]">{p.label}</strong> — {p.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 bg-[#f7f5f0]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-[#0a1a2e] mb-3">Unsure of Your Dimensions?</h2>
          <p className="text-slate-600 mb-6">
            Send us a photograph or physical sample and our technical sales team will help you specify the
            gasket. All measurements are optional on the RFQ form — provide what you know.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/request-quote" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#c9a227] hover:bg-[#b8901f] text-[#0a1a2e] font-bold transition-colors">
              <Send className="w-5 h-5" /> Send Your Drawing
            </Link>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold transition-colors">
              <MessageCircle className="w-5 h-5" /> WhatsApp Technical Sales
            </a>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}