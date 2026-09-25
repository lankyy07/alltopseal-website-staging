import { useState } from "react";
import { Upload, FileText, MessageCircle, CheckCircle2, Paperclip, Mail } from "lucide-react";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { company, waLink, products } from "@/lib/siteData";

const empty = {
  company_name: "", contact_person: "", email: "", phone: "", delivery_location: "",
  product_material: "", quantity: "", thickness: "", supply_form: "", application: "",
  gasket_type: "", od: "", id_dim: "", pcd: "", bolt_hole_diameter: "", bolt_hole_quantity: "",
  length: "", width: "", internal_opening: "", hole_spacing: "", special_dimensions: "",
  equipment: "", medium: "", temperature: "", pressure: "", notes: "",
  flange_standard: "", pressure_class: "", flange_facing: "", winding_metal: "", filler_material: "", guide_rings: "",
};

function Field({ label, name, value, onChange, placeholder, type = "text", required }) {
  return (
    <div>
      <Label htmlFor={name} className="text-sm font-semibold text-slate-700 mb-1.5 block">
        {label} {required && <span className="text-red-500">*</span>}
        {!required && <span className="text-xs text-slate-400 font-normal"> (optional)</span>}
      </Label>
      <Input id={name} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
}

function SectionCard({ title, subtitle, children }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 lg:p-7">
      <h3 className="text-lg font-bold text-[#0a1a2e] mb-1">{title}</h3>
      {subtitle && <p className="text-sm text-slate-500 mb-5">{subtitle}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>
    </div>
  );
}

export default function RequestQuote() {
  const [form, setForm] = useState(empty);
  const [files, setFiles] = useState([]);
  const success = new URLSearchParams(window.location.search).get("submitted") === "1";
  const [error, setError] = useState("");

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const onFiles = (e) => setFiles(Array.from(e.target.files || []));

  const buildWaMessage = () => {
    const parts = [`Hello ALL TOPSEAL, I would like to request a quotation:`];
    if (form.company_name) parts.push(`Company: ${form.company_name}`);
    if (form.contact_person) parts.push(`Contact: ${form.contact_person}`);
    if (form.product_material) parts.push(`Product: ${form.product_material}`);
    if (form.quantity) parts.push(`Qty: ${form.quantity}`);
    const circ = [form.od && `OD ${form.od}`, form.id_dim && `ID ${form.id_dim}`, form.pcd && `PCD ${form.pcd}`, form.bolt_hole_quantity && `${form.bolt_hole_quantity} holes`].filter(Boolean).join(", ");
    if (circ) parts.push(`Dimensions: ${circ}`);
    if (form.medium) parts.push(`Medium: ${form.medium}`);
    if (form.temperature) parts.push(`Temp: ${form.temperature}`);
    if (form.notes) parts.push(`Notes: ${form.notes}`);
    return parts.join("\n");
  };

  const handleSubmit = (e) => {
    setError("");
    if (!form.contact_person.trim()) {
      e.preventDefault();
      setError("Please enter a contact person.");
      return;
    }
    if (!form.email && !form.phone) {
      e.preventDefault();
      setError("Please provide an email or phone number so we can respond.");
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: company.websiteUrl + "/" },
      { "@type": "ListItem", position: 2, name: "Request a Quote", item: company.websiteUrl + "/request-quote" },
    ],
  };

  if (success) {
    return (
      <>
        <Seo title="Request a Quote | ALL TOPSEAL" description="Submit a technical RFQ for industrial sealing products and custom gaskets." jsonLd={jsonLd} />
        <section className="bg-[#0a1a2e] text-white">
          <div className="max-w-7xl mx-auto px-4 py-14 lg:py-20">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Request Quote" }]} />
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-9 h-9 text-green-600" />
            </div>
            <h1 className="text-3xl font-black text-[#0a1a2e] mb-3">RFQ Received — Thank You</h1>
            <p className="text-slate-600 mb-8">
              Thank you for submitting your technical RFQ. If your submission was successful, the details
              should reach our team by email. If you do not receive a response, contact us via WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={waLink(buildWaMessage())} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold transition-colors">
                <MessageCircle className="w-5 h-5" /> Send details on WhatsApp
              </a>
              <a href={`mailto:${company.email}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-slate-300 text-[#0a1a2e] font-bold hover:bg-[#f7f5f0] transition-colors">
                <Mail className="w-5 h-5" /> Email us
              </a>
              <button onClick={() => { window.location.href = "/request-quote"; }} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-[#0a1a2e] font-bold hover:underline transition-colors">
                Submit another RFQ
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Seo
        title="Request a Quote / Technical RFQ | Custom Gaskets & Sealing Materials | ALL TOPSEAL"
        description="Submit a technical RFQ for industrial sealing products and custom gaskets. Send drawings, dimensions, photos or samples. ALL TOPSEAL — Emma Onyeco Investment Company Limited, Lagos."
        jsonLd={jsonLd}
      />

      <section className="bg-[#0a1a2e] text-white">
        <div className="max-w-7xl mx-auto px-4 py-14 lg:py-20">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Request Quote" }]} />
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black">Request a Quote / Technical RFQ</h1>
          <p className="mt-4 text-lg text-[#cfdce8] max-w-3xl">
            Complete the form below with as much detail as you have. All fields except contact name and a
            contact method are optional — provide what you know and our technical sales team will assist.
            You can also attach drawings, photos or specifications (PDF, JPG, PNG).
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-[#f7f5f0]">
        <div className="max-w-4xl mx-auto px-4">
          <form
            action="https://formsubmit.co/mbuchi619@gmail.com"
            method="POST"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="_subject" value="NEW ALL TOPSEAL TECHNICAL RFQ" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={`${window.location.origin}/request-quote?submitted=1`} />
            <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />
            {/* Customer details */}
            <SectionCard title="Customer Details" subtitle="Tell us who you are and where to deliver.">
              <Field label="Company name" name="company_name" value={form.company_name} onChange={onChange} placeholder="Your company" />
              <Field label="Contact person" name="contact_person" value={form.contact_person} onChange={onChange} placeholder="Full name" required />
              <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} placeholder="you@company.com" />
              <Field label="Phone / WhatsApp" name="phone" value={form.phone} onChange={onChange} placeholder="08xx xxx xxxx" />
              <div className="sm:col-span-2">
                <Field label="Delivery location" name="delivery_location" value={form.delivery_location} onChange={onChange} placeholder="City / state / country" />
              </div>
            </SectionCard>

            {/* Product details */}
            <SectionCard title="Product Details" subtitle="What do you need?">
              <div className="sm:col-span-2">
                <Label htmlFor="product_material" className="text-sm font-semibold text-slate-700 mb-1.5 block">
                  Product / material <span className="text-xs text-slate-400 font-normal">(optional)</span>
                </Label>
                <Input id="product_material" list="product-list" name="product_material" value={form.product_material} onChange={onChange} placeholder="e.g. Spiral wound gasket, flange gasket, non-asbestos sheet, gland packing" />
                <datalist id="product-list">
                  {products.map((p) => <option key={p.slug} value={p.name} />)}
                </datalist>
              </div>
              <Field label="Quantity" name="quantity" value={form.quantity} onChange={onChange} placeholder="e.g. 20 pcs / 5 sheets" />
              <Field label="Thickness" name="thickness" value={form.thickness} onChange={onChange} placeholder="e.g. 3 mm" />
              <Field label="Supply form" name="supply_form" value={form.supply_form} onChange={onChange} placeholder="e.g. full sheet, cut gaskets" />
              <Field label="Application" name="application" value={form.application} onChange={onChange} placeholder="e.g. pump flange, boiler handhole" />
            </SectionCard>

            {/* Spiral wound RFQ fields are shown when the product is selected. */}
            {form.product_material.toLowerCase().includes("spiral") && (
              <SectionCard title="Spiral Wound Gasket Specifications" subtitle="Provide what you know; we will confirm final specifications and sourcing availability.">
                <Field label="Flange standard" name="flange_standard" value={form.flange_standard} onChange={onChange} placeholder="e.g. ASME B16.5 / drawing reference" />
                <Field label="Pressure class" name="pressure_class" value={form.pressure_class} onChange={onChange} placeholder="150, 300, 600, 900 or 1500" />
                <Field label="Flange facing" name="flange_facing" value={form.flange_facing} onChange={onChange} placeholder="RF, FF or other" />
                <Field label="Winding metal" name="winding_metal" value={form.winding_metal} onChange={onChange} placeholder="e.g. 316 stainless steel, if specified" />
                <Field label="Filler material" name="filler_material" value={form.filler_material} onChange={onChange} placeholder="e.g. graphite / PTFE, if specified" />
                <Field label="Guide rings" name="guide_rings" value={form.guide_rings} onChange={onChange} placeholder="Inner ring / outer ring / both" />
              </SectionCard>
            )}

            {/* Circular dimensions */}
            <SectionCard title="Circular Gasket Dimensions" subtitle="For circular or full-face flange gaskets.">
              <Field label="OD (outside diameter)" name="od" value={form.od} onChange={onChange} placeholder="mm" />
              <Field label="ID (inside diameter)" name="id_dim" value={form.id_dim} onChange={onChange} placeholder="mm" />
              <Field label="PCD (pitch circle diameter)" name="pcd" value={form.pcd} onChange={onChange} placeholder="mm" />
              <Field label="Bolt-hole diameter" name="bolt_hole_diameter" value={form.bolt_hole_diameter} onChange={onChange} placeholder="mm" />
              <div className="sm:col-span-2">
                <Field label="Bolt-hole quantity" name="bolt_hole_quantity" value={form.bolt_hole_quantity} onChange={onChange} placeholder="e.g. 8" />
              </div>
            </SectionCard>

            {/* Rectangular dimensions */}
            <SectionCard title="Rectangular Gasket Dimensions" subtitle="For rectangular or frame gaskets.">
              <Field label="Length" name="length" value={form.length} onChange={onChange} placeholder="mm" />
              <Field label="Width" name="width" value={form.width} onChange={onChange} placeholder="mm" />
              <Field label="Internal opening" name="internal_opening" value={form.internal_opening} onChange={onChange} placeholder="mm" />
              <Field label="Hole spacing" name="hole_spacing" value={form.hole_spacing} onChange={onChange} placeholder="mm" />
              <div className="sm:col-span-2">
                <Field label="Special dimensions" name="special_dimensions" value={form.special_dimensions} onChange={onChange} placeholder="Any other dimensions to note" />
              </div>
            </SectionCard>

            {/* Operating details */}
            <SectionCard title="Operating Details" subtitle="Helps with material selection.">
              <Field label="Equipment" name="equipment" value={form.equipment} onChange={onChange} placeholder="e.g. pump, valve, boiler" />
              <Field label="Medium" name="medium" value={form.medium} onChange={onChange} placeholder="e.g. water, oil, steam" />
              <Field label="Temperature" name="temperature" value={form.temperature} onChange={onChange} placeholder="e.g. 120 °C" />
              <Field label="Pressure" name="pressure" value={form.pressure} onChange={onChange} placeholder="e.g. 10 bar" />
            </SectionCard>

            {/* File upload */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 lg:p-7">
              <h3 className="text-lg font-bold text-[#0a1a2e] mb-1">Attach Drawings, Photos or Specifications</h3>
              <p className="text-sm text-slate-500 mb-5">PDF, JPG, JPEG or PNG. You can attach multiple files.</p>
              <Label htmlFor="file-upload" className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-300 rounded-lg py-8 cursor-pointer hover:border-[#c9a227] hover:bg-[#f7f5f0] transition-colors">
                <Upload className="w-8 h-8 text-slate-400" />
                <span className="text-sm font-semibold text-slate-700">Click to select files</span>
                <span className="text-xs text-slate-400">Drawings, photos, equipment images, samples, technical specs</span>
                <Input id="file-upload" name="attachment" type="file" multiple accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={onFiles} />
              </Label>
              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  {files.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700 bg-[#f7f5f0] rounded-md px-3 py-2">
                      <Paperclip className="w-4 h-4 text-[#c9a227]" /> {f.name}
                      <span className="text-slate-400">({(f.size / 1024).toFixed(0)} KB)</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Notes */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 lg:p-7">
              <Label htmlFor="notes" className="text-sm font-semibold text-slate-700 mb-1.5 block">Additional Notes</Label>
              <Textarea id="notes" name="notes" value={form.notes} onChange={onChange} rows={5} placeholder="Anything else we should know — material preferences, delivery timeline, equipment references, etc." />
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3">
                {error}
              </div>
            )}

            {/* Submit */}
            <div className="flex flex-col gap-3">
              <Button type="submit" className="w-full bg-[#c9a227] hover:bg-[#b8901f] text-[#0a1a2e] font-bold text-base h-12">
                <FileText className="w-5 h-5 mr-2" /> Submit Technical RFQ
              </Button>
              <a
                href={waLink(buildWaMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> Send by WhatsApp (+{company.whatsapp})
              </a>
              <p className="text-center text-xs text-slate-500">
                Or email your RFQ directly to{" "}
                <a href={`mailto:${company.email}`} className="text-[#0a1a2e] font-semibold underline underline-offset-2">{company.email}</a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}