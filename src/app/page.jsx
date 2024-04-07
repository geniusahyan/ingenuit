import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Industries from "./components/Industries";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Industries />
      <section className="w-screen h-screen bg-[#00ff22] " ></section>
    </>
  );
}
