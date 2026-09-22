import ProductPageTemplate from "@/components/ProductPageTemplate";
import { getProduct } from "@/lib/siteData";

export default function GlandPacking() {
  return <ProductPageTemplate product={getProduct("gland-packing")} />;
}