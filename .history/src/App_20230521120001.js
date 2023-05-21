import Footer from "./components/Footer";
import Header from "./components/Header";
import BottomSection from "./components/bottomSection/BottomSection";
import MiddleSection from "./components/middleSection/MiddleSection";
import TopSection from "./components/topSection/TopSection";

function App() {
  return (
    <div className="relative">
      <Header />
      <TopSection />
      <MiddleSection />
      <BottomSection />
      <Footer />
    </div>
  );
}

export default App;
