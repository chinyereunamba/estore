import About from '@/components/about/About';
import Category from '@/components/category/Category';
import FAQs from '@/components/faq/FAQs';
import Intro from '@/components/intro/Intro'

export default function Home() {
  return (
    <main className="">
      <Intro />
      <Category />
      <About />
      <FAQs />
    </main>
  );
}
