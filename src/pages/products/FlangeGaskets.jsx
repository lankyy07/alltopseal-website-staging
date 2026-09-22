import ProductPageTemplate from "@/components/ProductPageTemplate";
import { getProduct } from "@/lib/siteData";

export default function FlangeGaskets() {
  return <ProductPageTemplate product={getProduct("flange-gaskets")} />;
}