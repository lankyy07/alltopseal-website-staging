import ProductPageTemplate from "@/components/ProductPageTemplate";
import { getProduct } from "@/lib/siteData";

export default function SBRRubberSheets() {
  return <ProductPageTemplate product={getProduct("sbr-rubber-sheets")} />;
}