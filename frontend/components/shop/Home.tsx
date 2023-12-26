import { FaMagnifyingGlass } from "react-icons/fa6";
import style from "./shop.module.css";
import Filter from "./Filter";
import Products from "./Products";

export default function Home() {
  return (
    <main className="px-20 mt-5 pb-10">
      <form method="post" className={style.search}>
        <input type="text" placeholder="Search products ..." />
        <FaMagnifyingGlass />
        <button type="submit">Search</button>
      </form>
      <section className="flex gap-3 mt-3 py-3">
        <Filter />
        <Products />
      </section>
    </main>
  );
}
