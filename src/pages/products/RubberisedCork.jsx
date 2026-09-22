import ProductPageTemplate from "@/components/ProductPageTemplate";
import { getProduct } from "@/lib/siteData";

export default function RubberisedCork() {
  return <ProductPageTemplate product={getProduct("rubberised-cork")} />;
}