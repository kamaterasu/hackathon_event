import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Event from "./components/event/Event";
import Sponser from "./components/sponser/Sponser";
import Swiper from "./components/Swiper/Swiper";
import HeaderWithTimer from "./components/header/HTimer";
import CustomizedTimeline from "./components/header/timeLine";
import Mentor from "./components/mentor/Mentor";
import Footer from "./components/footer/Footer";

function App() {
  const startDate = new Date(); // Start date
  const endDate = new Date(startDate.getTime() + 24 * 60 * 60 * 1000); // End Date
  return (
    <>
      <Header />
      {/* <Home /> */}
      <HeaderWithTimer
        title="Hackathon дуустал:"
        startDate={startDate}
        endDate={endDate}
      />
      <div className="flex justify-center mt-40" id="timeline">
        <h1 className="text-5xl font-bold text-center customFont">Timeline</h1>
      </div>
      <div className="flex mt-10 mb-10">
        <CustomizedTimeline />
      </div>
      <div id="hutulbur">
        <Swiper />
      </div>
      <div id="mentor">
        <Mentor />
      </div>
      <div id="sponser">
        <Sponser />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
