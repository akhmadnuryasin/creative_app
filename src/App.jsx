import NftCard from "./components/NftCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Data } from "./utils/Data";

function App() {
  return (
    <div className="bg-[#030303] font-museo-moderno">
      <Navbar />
      <section>
        <div className="max-w-screen-xl px-12 mx-auto sm:px-6 lg:px-8">
          <div className="grid mt-4 gap-11 sm:grid-cols-2 lg:grid-cols-3">
            {Data.map((item) => (
              <NftCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
