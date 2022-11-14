import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Place from "./Pages/Place";
import Nft from "./Pages/Nft";
import Community from "./Pages/Community";

function App() {
  return (
    <div className="container-fluid m-0 p-0 App">
      <BrowserRouter>
        <Routes>
          <Route path="/MetaBnb" element={<Home />}></Route>
          <Route path="/about" element={<Place />}></Route>
          <Route path="/careers" element={<Nft />}></Route>
          <Route path="/events" element={<Community />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
