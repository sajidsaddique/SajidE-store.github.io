import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import Header from "./components/Header";
import Footer from "./components/Footer";
const Home = () => {
  const data = {
    name: "E_store",
  };

  return (
    <>
       <Header />
      <HeroSection myData={data} />
      <Services />
      <Trusted />
      <Footer />
    </>
  );
};

export default Home;