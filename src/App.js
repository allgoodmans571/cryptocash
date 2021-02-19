import AboutWork from "./Components/AboutWork";
import Contacts from "./Components/Contacts";
import Feedback from "./Components/Feedback";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Invest from "./Components/Invest";
import Navbar from "./Components/Navbar";
import Numbers from "./Components/Numbers";
import Partnership from "./Components/Partnership";
import Profit from "./Components/Profit";
import Reviews from "./Components/Reviews";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Header />
        <AboutWork />
        <Partnership />
        <Numbers />
        <Profit />
        <Reviews />
        <Invest />
        <Feedback />
        <Contacts />
      </div>
      <Footer />
    </div>
  );
}

export default App;
