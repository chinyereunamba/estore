import About from '@/components/about/About';
import Category from '@/components/category/Category';
import Intro from '@/components/intro/Intro'

export default function Home() {
  return (
    <main className="">
      <Intro />
      <Category />
      <About />
    </main>
  );
}
