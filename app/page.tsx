import Navbar from "@/components/UI/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar isTransparent={true} />
      <header className="-my-10 min-h-[40rem]">
        <div className="md:max-w-contain w-11/12 mx-auto relative">

          <h1>BSocial Clone</h1>
        </div>
      </header>
    </main>
  );
}
