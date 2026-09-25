import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, MessageCircle, ShieldCheck, Headphones, Wrench, Package, ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/CtaBanner";
import { company, images, waLink, mailLink, telLink } from "@/lib/siteData";

const values = [
  { icon: ShieldCheck, title: "Reliability", text: "Consistent supply and dependable quotations for procurement teams." },
  { icon: Headphones, title: "Technical Support", text: "Practical guidance on material selection and gasket specification." },
  { icon: Wrench, title: "Custom Gasket Solutions", text: "Fabrication from drawings, dimensions, photographs or samples." },
  { icon: Package, title: "Industrial Sourcing", text: "A focused range of industrial sealing materials for B2B buyers." },
];

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Emma Onyeco Investment Company Limited",
    alternateName: "ALL TOPSEAL",
    image: company.websiteUrl + "/favicon.svg",
    "@id": company.websiteUrl,
    url: company.websiteUrl,
    telephone: "+" + company.whatsapp,
    email: company.email,
    priceRange: "$$",
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
        title="About Us | Emma Onyeco Investment Company Limited | ALL TOPSEAL"
        description="Emma Onyeco Investment Company Limited trades as ALL TOPSEAL, supplying industrial sealing materials and custom gasket solutions from ASPAMDA, Lagos International Trade Fair Complex. Reliable supply, technical support and responsive service."
        jsonLd={jsonLd}
      />

      <section className="relative bg-[#0a1a2e] overflow-hidden">
        <div className="absolute inset-0">
          <Image src={images.fabrication} alt="Engineering fabrication workstation" className="w-full h-full" fittingType="fill" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a2e] via-[#0a1a2e]/90 to-[#0a1a2e]/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-14 lg:py-20">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About" }]} />
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white">About Us</h1>
          <p className="mt-4 text-lg text-[#cfdce8] max-w-3xl">
            {company.legalName} operates under the <strong className="text-white">ALL TOPSEAL</strong>{" "}
            industrial sealing brand — supplying industrial sealing materials and custom gasket solutions
            to procurement teams, engineers and maintenance professionals.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a1a2e] mb-4">Who We Are</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              {company.legalName} — trading as <strong className="text-[#0a1a2e]">ALL TOPSEAL</strong> — is a
              Lagos-based industrial sealing supplier. We combine reliable industrial sourcing with
              technical support and responsive customer service, building long-term B2B relationships
              around practical sealing solutions.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              We work with procurement teams, engineers and maintenance professionals who need a supplier
              that understands industrial requirements — one who can work from a drawing, dimension or
              sample and help solve the sealing problem.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Our focus is on reliability, technical support, customer responsiveness, industrial
              sourcing and custom gasket fabrication — not hype. We aim to be a dependable part of your
              supply chain.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
            <Image src={images.industrialPlant} alt="Industrial plant" className="w-full aspect-[4/3]" fittingType="fill" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 lg:py-20 bg-[#f7f5f0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a1a2e]">What We Stand For</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">{company.tagline}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl bg-white border border-slate-200 p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-[#0a1a2e] flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-[#c9a227]" />
                </div>
                <h3 className="font-bold text-[#0a1a2e] mb-1.5">{v.title}</h3>
                <p className="text-sm text-slate-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-[#c9a227] font-semibold text-sm uppercase tracking-wider mb-3">
              <MapPin className="w-4 h-4" /> Our Location
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a1a2e] mb-4">Based in Lagos</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              We are located at ASPAMDA, Lagos International Trade Fair Complex — a major industrial
              trading hub on the Lagos-Badagry Expressway. Customers can send drawings, dimensions or
              physical samples to our facility for custom gasket fabrication.
            </p>
            <div className="space-y-3 text-slate-700">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#c9a227] shrink-0 mt-0.5" />
                <span>{company.address}</span>
              </div>
              <a href={telLink} className="flex gap-3 hover:text-[#c9a227] transition-colors">
                <Phone className="w-5 h-5 text-[#c9a227] shrink-0 mt-0.5" />
                <span>{company.phone}</span>
              </a>
              <a href={mailLink} className="flex gap-3 hover:text-[#c9a227] transition-colors break-all">
                <Mail className="w-5 h-5 text-[#c9a227] shrink-0 mt-0.5" />
                <span>{company.email}</span>
              </a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-[#c9a227] transition-colors">
                <MessageCircle className="w-5 h-5 text-[#c9a227] shrink-0 mt-0.5" />
                <span>WhatsApp: {company.phone} ({company.whatsappUser})</span>
              </a>
            </div>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#0a1a2e] text-white font-bold hover:bg-[#0a1a2e]/90 transition-colors">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg h-80">
            <iframe
              title="ALL TOPSEAL location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}