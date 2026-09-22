import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { company, products, waLink, mailLink, telLink } from "@/lib/siteData";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#07131f] text-[#9fb3c8]">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#c9a227] to-[#8a6d18] flex items-center justify-center">
                <span className="text-[#0a1a2e] font-black text-lg">E.</span>
              </div>
              <div>
                <div className="text-white font-black text-lg">ALL TOPSEAL</div>
                <div className="text-[10px] text-[#7d92a6] uppercase tracking-wider">
                  Industrial Sealing
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              {company.legalName} — trading as <span className="text-white font-semibold">ALL TOPSEAL</span>.
              Industrial sealing materials and custom gasket solutions for B2B buyers.
            </p>
            <p className="text-xs text-[#7d92a6]">{company.tagline}</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-sm">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link to={`/products/${p.slug}`} className="hover:text-[#c9a227] transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/industries" className="hover:text-[#c9a227] transition-colors">Industries</Link></li>
              <li><Link to="/technical-resources" className="hover:text-[#c9a227] transition-colors">Technical Resources</Link></li>
              <li><Link to="/how-to-measure-a-gasket" className="hover:text-[#c9a227] transition-colors">How to Measure a Gasket</Link></li>
              <li><Link to="/about" className="hover:text-[#c9a227] transition-colors">About Us</Link></li>
              <li><Link to="/request-quote" className="hover:text-[#c9a227] transition-colors">Request a Quote</Link></li>
              <li><Link to="/contact" className="hover:text-[#c9a227] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-[#c9a227] shrink-0" />
                <span>{company.address}</span>
              </li>
              <li>
                <a href={telLink} className="flex gap-2.5 hover:text-[#c9a227] transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 text-[#c9a227] shrink-0" />
                  <span>{company.phone}</span>
                </a>
              </li>
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex gap-2.5 hover:text-[#c9a227] transition-colors">
                  <MessageCircle className="w-4 h-4 mt-0.5 text-[#c9a227] shrink-0" />
                  <span>WhatsApp: {company.phone}</span>
                </a>
              </li>
              <li>
                <a href={mailLink} className="flex gap-2.5 hover:text-[#c9a227] transition-colors break-all">
                  <Mail className="w-4 h-4 mt-0.5 text-[#c9a227] shrink-0" />
                  <span>{company.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7d92a6]">
          <p>© {year} {company.legalName}. Trading as ALL TOPSEAL. All rights reserved.</p>
          <p>{company.website}</p>
        </div>
      </div>
    </footer>
  );
}