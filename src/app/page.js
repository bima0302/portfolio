import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-blue-100 mt-20 p-10 m-4 rounded-3xl">
      <div class="container mx-auto flex items-center justify-between">
        <div class="text-2xl">Hello, I&apos;m Bima!</div>
        <a
          href="https://www.linkedin.com/in/abimanyusrisetyo/"
          class="inline-block"
          target="_blank"
        >
          <button class="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white">
            Contact Me
          </button>
        </a>
      </div>
    </div>
  );
}
