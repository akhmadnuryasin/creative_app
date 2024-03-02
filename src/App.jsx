import NftCard from "./components/NftCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Colection from "./sections/Colection";
// import Hero from "./sections/Hero";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

function App() {
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <div className="bg-[#030303] font-museo-moderno" data-scroll-section>
          <Navbar />
          {/* <Hero /> */}
          <Colection />
          <Footer />
        </div>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
