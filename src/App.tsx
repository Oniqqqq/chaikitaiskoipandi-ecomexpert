import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Scenarios } from "./components/Scenarios";
import { Quiz } from "./components/Quiz";
import { Categories, Showcase } from "./components/Catalog";
import { Subscription } from "./components/Subscription";
import { Tearooms } from "./components/Tearooms";
import { Trust } from "./components/Trust";
import { Footer } from "./components/Footer";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <div className="page">
        <Header />
        <main>
          <Hero />
          <Scenarios />
          <Quiz />
          <Categories />
          <Showcase />
          <Subscription />
          <Tearooms />
          <Trust />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
