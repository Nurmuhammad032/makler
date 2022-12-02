import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EditPage, Footer, Navbar } from "./components";
import { ContextProvider } from "./context/context";
import ProtectedRoute from "./helpers/ProtectedRoute";
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
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    let access = localStorage.getItem("access");
    if (access) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <Router>
      <ContextProvider>
        <div className="wrapper">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/cabinet"
              element={
                <ProtectedRoute user={isLogin}>
                  <UserCabinet />
                </ProtectedRoute>
              }
            />
            <Route path="/create-master" element={<EditPage />} />
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
