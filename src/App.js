import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { ContextProvider } from "./context/context";
import {
  AllIndustriya,
  CreateProduct,
  Home,
  Industriya,
  MasterPage,
  SavedProduct,
  SingleProduct,
  UserCabinet,
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
            <Route path="/master" element={<Workers />} />
            <Route path="/master/:id" element={<MasterPage />} />
            <Route path="/industria/:id" element={<Industriya />} />
            <Route path="/industria" element={<AllIndustriya />} />
          </Routes>
          <Footer />
        </div>
      </ContextProvider>
    </Router>
  );
}

export default App;
