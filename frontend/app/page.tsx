import About from "@/components/about/About";
import Brands from "@/components/brands/Brands";
import Category from "@/components/category/Category";
import FAQs from "@/components/faq/FAQs";
import Intro from "@/components/intro/Intro";
import TopPicks from "@/components/top-pick/TopPick";
import ProductContextProvider from "@/store/productContext";

export default function Home() {
  return (
    <main className="">
      <ProductContextProvider>
        <Intro />
        <Category />
        <Brands />
        <TopPicks />
        <FAQs />
      </ProductContextProvider>
    </main>
  );
}
