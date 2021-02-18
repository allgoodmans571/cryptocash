import AboutWork from "./Components/AboutWork";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
// import Partnership from "./Components/Partnership";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Header />
        <AboutWork />
        {/* <Partnership /> */}
      </div>
    </div>
  );
}

export default App;
