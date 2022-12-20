import { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { EditPage, Footer, LoginModal, Navbar, ScrollTop } from "./components";
import ContextApp, { ContextProvider } from "./context/context";
import ProtectedRoute from "./helpers/ProtectedRoute";
import "react-toastify/dist/ReactToastify.css";
import {
  AllIndustriya,
  AllProducts,
  CreateIndustriya,
  CreatePage,
  CreateProduct,
  EditHouse,
  EditMaster,
  EditStore,
  Home,
  Industriya,
  MasterPage,
  SavedProduct,
  SingleProduct,
  UserCabinet,
  Workers,
} from "./pages";
import { ToastContainer } from "react-toastify";
import CreatePageProtect from "./components/CreatePageProtect/CreatePageProtect";

const CabinetPage = () => {
  const userId = localStorage.getItem("userId");
  if (userId) {
    return <Navigate to={`/cabinet/${userId}`} />;
  }
  return <Navigate to={`/`} />;
};

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const { openLoginModal } = useContext(ContextApp);
  useEffect(() => {
    let access = localStorage.getItem("access");
    if (access) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <>
      <div className="wrapper">
        <ToastContainer />
        <ScrollTop />
        <Navbar />
        {openLoginModal && <LoginModal />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/create"
            element={
              <CreatePageProtect user={isLogin}>
                <CreatePage />
              </CreatePageProtect>
            }
          />
          <Route path="/cabinet/:id" element={<UserCabinet />} />
          <Route path="/cabinet" element={<CabinetPage />} />
          <Route path="/edit-house/:id" element={<EditHouse />} />
          <Route path="/edit-master/:id" element={<EditMaster />} />
          <Route path="/edit-store/:id" element={<EditStore />} />
          <Route path="/edit-house" element={<CabinetPage />} />
          <Route path="/edit-master" element={<CabinetPage />} />
          <Route path="/edit-store" element={<CabinetPage />} />
          <Route path="/create/master" element={<EditPage />} />
          <Route path="/create/house" element={<CreateProduct />} />
          <Route path="/save-products" element={<SavedProduct />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/product" element={<AllProducts />} />
          <Route path="/master" element={<Workers />} />
          <Route path="/master/:id" element={<MasterPage />} />
          <Route path="/industria/:id" element={<Industriya />} />
          <Route path="/industria" element={<AllIndustriya />} />
          <Route path="/create/industria" element={<CreateIndustriya />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
