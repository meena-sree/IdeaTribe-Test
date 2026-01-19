import Cards from "./components/Cards";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-ful bg-black text-white min-h-screen">
      <Header/>
      <Navbar />
      <Hero/>
      <Divider/>
      <Cards/>
      <Journey/>
      <Footer/>
    </div>
  );
}

export default App;
