import ProductPageTemplate from "@/components/ProductPageTemplate";
import { getProduct } from "@/lib/siteData";

export default function SpiralWoundGaskets() {
  return <ProductPageTemplate product={getProduct("spiral-wound-gaskets")} />;
}
