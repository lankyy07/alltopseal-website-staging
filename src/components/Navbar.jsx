import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { navItems, company, mailLink } from "@/lib/siteData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement bar */}
      <div className="bg-[#0a1a2e] text-[#e8c14a] text-xs sm:text-[13px] tracking-wide">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-2 text-center">
          <span className="hidden sm:inline font-semibold uppercase tracking-wider">All orders &amp; technical RFQs:</span>
          <span className="sm:hidden font-semibold uppercase">RFQs:</span>
          <a href={mailLink} className="underline underline-offset-2 hover:text-white transition-colors font-medium">
            {company.email}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`transition-all duration-300 ${
          scrolled ? "bg-[#0a1a2e]/95 backdrop-blur shadow-lg" : "bg-[#0a1a2e]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-md bg-gradient-to-br from-[#c9a227] to-[#8a6d18] flex items-center justify-center shadow-md">
                <span className="text-[#0a1a2e] font-black text-lg lg:text-xl tracking-tight">E.</span>
              </div>
              <div className="leading-none">
                <div className="text-white font-black text-lg lg:text-xl tracking-tight">ALL TOPSEAL</div>
                <div className="text-[10px] lg:text-[11px] text-[#9fb3c8] tracking-wider uppercase mt-0.5">
                  Industrial Sealing Solutions
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#cfdce8] hover:text-white transition-colors">
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 pt-1 w-64">
                        <div className="bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.to}
                              to={child.to}
                              className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-[#f6f2e9] hover:text-[#0a1a2e] font-medium transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : item.cta ? (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="ml-2 px-5 py-2.5 rounded-md bg-[#c9a227] hover:bg-[#b8901f] text-[#0a1a2e] text-sm font-bold transition-colors shadow-md"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      location.pathname === item.to ? "text-white" : "text-[#cfdce8] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-[#0a1a2e] border-t border-white/10 max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      className="w-full flex items-center justify-between py-3 text-[#cfdce8] font-medium"
                      onClick={() =>
                        setOpenDropdown((d) => (d === item.label ? null : item.label))
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 border-l border-white/10 ml-1 mb-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className="block py-2.5 text-sm text-[#9fb3c8]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.cta ? (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="block mt-2 px-4 py-3 rounded-md bg-[#c9a227] text-[#0a1a2e] font-bold text-center"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="block py-3 text-[#cfdce8] font-medium"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <a
                href={`tel:+${company.whatsapp}`}
                className="flex items-center gap-2 py-3 text-[#c9a227] font-semibold"
              >
                <Phone className="w-4 h-4" /> {company.phone}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}