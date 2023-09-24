import Image from "next/image";
import Banner from "@/components/Banner";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <>
      <Banner />
      <Projects />
      <Blog />
    </>
  );
}
