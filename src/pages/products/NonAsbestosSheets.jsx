import ProductPageTemplate from "@/components/ProductPageTemplate";
import { getProduct } from "@/lib/siteData";

export default function NonAsbestosSheets() {
  return <ProductPageTemplate product={getProduct("non-asbestos-gasket-sheets")} />;
}