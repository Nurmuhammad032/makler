import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { ContextProvider } from "./context/context";
import { Home, UserCabinet } from "./pages";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cabinet" element={<UserCabinet />} />
        </Routes>
        <Footer />
      </ContextProvider>
    </Router>
  );
}

export default App;
