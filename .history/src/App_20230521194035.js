import Footer from "./components/footer/Footer";
import BottomSection from "./components/bottomSection/BottomSection";
import MiddleSection from "./components/middleSection/MiddleSection";
import TopSection from "./components/topSection/TopSection";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <Header />

      <TopSection />

      <MiddleSection />

      <BottomSection />

      <Footer />
    </div>
  );
}

export default App;
