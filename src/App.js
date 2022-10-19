import Navbar from "./components/common/navbar/Navbar";
import Layout from "./layout/Layout";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
