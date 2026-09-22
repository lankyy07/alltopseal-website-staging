import { Link } from "react-router-dom";
import { FileText, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/siteData";

export default function CtaBanner({
  title = "Have a Drawing, Dimension or Sample?",
  subtitle = "Send it to our technical sales team and receive a quotation — by email or WhatsApp.",
}) {
  return (
    <section className="bg-[#0a1a2e] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#c9a227,transparent_50%),radial-gradient(circle_at_80%_80%,#c9a227,transparent_45%)]" />
      <div className="max-w-5xl mx-auto px-4 py-16 lg:py-20 text-center relative">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">{title}</h2>
        <p className="text-[#9fb3c8] text-base sm:text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/request-quote"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-[#c9a227] hover:bg-[#b8901f] text-[#0a1a2e] font-bold transition-colors shadow-lg"
          >
            <FileText className="w-5 h-5" /> Request Technical Quote
          </Link>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold transition-colors"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp Technical Sales
          </a>
        </div>
      </div>
    </section>
  );
}