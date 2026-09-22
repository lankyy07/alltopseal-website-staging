import { MapPin, Mail, Phone, MessageCircle, Globe, Send } from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { company, waLink, mailLink, telLink } from "@/lib/siteData";

export default function Contact() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Emma Onyeco Investment Company Limited",
    alternateName: "ALL TOPSEAL",
    url: company.websiteUrl,
    telephone: "+" + company.whatsapp,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Zone D, Block 5, Shop 79, ASPAMDA, Lagos International Trade Fair Complex, Lagos-Badagry Expressway",
      addressLocality: "Lagos",
      addressRegion: "Lagos State",
      addressCountry: "NG",
    },
  };

  const channels = [
    { icon: Mail, label: "Email", value: company.email, href: mailLink, note: "All orders & technical RFQs" },
    { icon: Phone, label: "Phone", value: company.phone, href: telLink, note: "Speak to technical sales" },
    { icon: MessageCircle, label: "WhatsApp", value: company.phone, href: waLink(), note: `WhatsApp username: ${company.whatsappUser}`, external: true },
    { icon: Globe, label: "Website", value: company.website, href: company.websiteUrl, note: "www.alltopseal.com", external: true },
  ];

  return (
    <>
      <Seo
        title="Contact ALL TOPSEAL | Industrial Gasket Supplier Lagos, Nigeria"
        description="Contact ALL TOPSEAL (Emma Onyeco Investment Company Limited) for industrial sealing materials and custom gasket fabrication. ASPAMDA, Lagos International Trade Fair Complex. Email, phone and WhatsApp."
        jsonLd={jsonLd}
      />

      <section className="bg-[#0a1a2e] text-white">
        <div className="max-w-7xl mx-auto px-4 py-14 lg:py-20">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black">Contact Us</h1>
          <p className="mt-4 text-lg text-[#cfdce8] max-w-3xl">
            {company.legalName} — trading as <strong className="text-white">ALL TOPSEAL</strong>. Reach our
            technical sales team by email, phone or WhatsApp. All orders and technical RFQs should be sent to{" "}
            <a href={mailLink} className="text-[#c9a227] underline underline-offset-2">{company.email}</a>.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact channels */}
          <div>
            <h2 className="text-2xl font-black text-[#0a1a2e] mb-2">Get in Touch</h2>
            <div className="w-12 h-1 bg-[#c9a227] mb-8" />
            <div className="space-y-4">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 rounded-xl border border-slate-200 bg-[#f7f5f0] p-5 hover:border-[#c9a227]/50 hover:shadow-md transition-all"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#0a1a2e] flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-[#c9a227]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#c9a227]">{c.label}</div>
                    <div className="font-bold text-[#0a1a2e] break-all">{c.value}</div>
                    <div className="text-sm text-slate-600">{c.note}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 p-6">
              <div className="flex gap-3 mb-3">
                <MapPin className="w-5 h-5 text-[#c9a227] shrink-0 mt-0.5" />
                <h3 className="font-bold text-[#0a1a2e]">Business Address</h3>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed pl-8">{company.address}</p>
              <p className="text-xs text-slate-500 mt-3 pl-8">
                International WhatsApp: {company.phoneIntl} · WhatsApp username: {company.whatsappUser}
              </p>
            </div>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold transition-colors"
            >
              <Send className="w-5 h-5" /> Send by WhatsApp
            </a>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg min-h-[420px]">
            <iframe
              title="ALL TOPSEAL location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`}
              className="w-full h-full min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}