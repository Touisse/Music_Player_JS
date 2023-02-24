import "./App.css";
import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/topbar/Topbar";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default App;
