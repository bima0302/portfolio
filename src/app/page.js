import Image from "next/image";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Banner />
      <Projects />
      <Card />
    </>
  );
}
