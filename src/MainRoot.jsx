import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import bg from "./assets/images/more/11.png";
import Header from "./components/Header";
import Footer from "./components/Footer";

const MainRoot = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <main style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainRoot;
