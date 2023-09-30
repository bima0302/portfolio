import Image from "next/image";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      {/* <About /> */}
      <Projects />
      <Blog />
      <Footer />
    </>
  );
}
