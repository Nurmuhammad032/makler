import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { ContextProvider } from "./context/context";
import {
  CreateProduct,
  Home,
  SavedProduct,
  SingleProduct,
  UserCabinet,
  UserSingle,
  Workers,
} from "./pages";

function App() {
  return (
    <Router>
      <ContextProvider>
        <div className="wrapper">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cabinet" element={<UserCabinet />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/save-products" element={<SavedProduct />} />
            <Route path="/product" element={<SingleProduct />} />
            <Route path="/workers" element={<Workers />} />
            <Route path="/worker" element={<UserSingle />} />
          </Routes>
          <Footer />
        </div>
      </ContextProvider>
    </Router>
  );
}

export default App;
