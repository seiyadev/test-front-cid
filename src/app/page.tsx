import Image from "next/image";
import Main from "./components/Main";
import HeaderIndex from "./components/header/Index";
import FooterIndex from "./components/footer/Index";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <HeaderIndex />
      <Main />
      <FooterIndex />
    </main>
  );
}
