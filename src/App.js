import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EditPage, Footer, Navbar } from "./components";
import { ContextProvider } from "./context/context";
import ProtectedRoute from "./helpers/ProtectedRoute";
import 'react-toastify/dist/ReactToastify.css';
import {
  AllIndustriya,
  CreateIndustriya,
  CreatePage,
  CreateProduct,
  Home,
  Industriya,
  MasterPage,
  SavedProduct,
  SingleProduct,
  UserCabinet,
  Workers,
} from "./pages";
import { ToastContainer } from "react-toastify";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    let access = localStorage.getItem("access");
    if (access) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  console.log(isLogin);

  return (
    <Router>
      <ContextProvider>
        <div className="wrapper">
        <ToastContainer />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/cabinet/:id" element={<UserCabinet />} />
            <Route path="/create/master" element={<EditPage />} />
            <Route path="/create/house" element={<CreateProduct />} />
            <Route path="/save-products" element={<SavedProduct />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/master" element={<Workers />} />
            <Route path="/master/:id" element={<MasterPage />} />
            <Route path="/industria/:id" element={<Industriya />} />
            <Route path="/industria" element={<AllIndustriya />} />
            <Route path="/create/industria" element={<CreateIndustriya />} />
          </Routes>
          <Footer />
        </div>
      </ContextProvider>
    </Router>
  );
}

export default App;
