import Footer from "./components/Footer/Footer";
import Header from "./header/Header";
import BottomSection from "./components/bottomSection/BottomSection";
import MiddleSection from "./components/middleSection/MiddleSection";
import TopSection from "./components/topSection/TopSection";

function App() {
  return (
    <div className="overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-red-500">
      <Header />

      <TopSection />

      <MiddleSection />

      <BottomSection />

      <Footer />
    </div>
  );
}

export default App;
