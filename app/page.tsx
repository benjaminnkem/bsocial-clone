import Navbar from "@/components/Layout/Navbar";
import ShowAllApps from "@/components/UI/Home";

export default function Home() {
  return (
    <>
      <header className="min-h-[40rem] relative text-white z-0" id="homeHead">
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
          <Navbar isTransparent={true} color="text-white" />

          <div className="md:max-w-contain w-11/12 mx-auto gap-4 h-full flex items-center -mt-20">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <h1 className="text-6xl font-extrabold">BSocial Clone</h1>
                <p className="text-gray-300 text-light text-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam tempora, modi totam ducimus eos animi
                  soluta iure! Possimus magni, consequuntur sint consectetur nostrum hic nesciunt officia dolores
                  aliquid repellat. At?
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="my-20 text-center">
          <h2 className="text-3xl font-bold">Available <span className="text-red-500">Apps</span></h2>
          <ShowAllApps />
        </section>

        <div className="h-[100rem]"></div>
      </main>
    </>
  );
}
