import ProductPageTemplate from "@/components/ProductPageTemplate";
import { getProduct } from "@/lib/siteData";

export default function SealingRopeTape() {
  return <ProductPageTemplate product={getProduct("sealing-rope-tape")} />;
}