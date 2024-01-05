import About from '@/components/about/About';
import Brands from '@/components/brands/Brands';
import Category from '@/components/category/Category';
import FAQs from '@/components/faq/FAQs';
import Intro from '@/components/intro/Intro'
import TopPicks from '@/components/top-pick/TopPick';

export default function Home() {
  return (
    <main className="">
      <Intro />
      <Category />
      <Brands />
      <TopPicks />
      <FAQs />
    </main>
  );
}
