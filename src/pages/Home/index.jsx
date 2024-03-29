import CategoriesSection from "./components/CategoriesSection";
import FeaturedSection from "./components/FetauredSection";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <main className="text-[black]">
      <div><Hero /></div>
      <div><FeaturedSection /></div>
      <div><CategoriesSection /></div>
    </main>
  );
};

export default Home;
