import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
      </main>
      <Footer />
    </div>
  );
}
