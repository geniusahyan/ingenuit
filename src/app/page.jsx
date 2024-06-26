import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Industries from "./components/Industries";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Industries />
      <Blog />
      <Footer />
    </>
  );
}
