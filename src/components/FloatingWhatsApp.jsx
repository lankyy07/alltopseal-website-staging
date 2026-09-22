import { waLink } from "@/lib/siteData";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full shadow-2xl pl-3 pr-4 py-3 transition-all hover:scale-105 group"
    >
      <MessageCircle className="w-6 h-6 fill-white/20" />
      <span className="hidden sm:inline text-sm font-semibold pr-1">WhatsApp Sales</span>
    </a>
  );
}