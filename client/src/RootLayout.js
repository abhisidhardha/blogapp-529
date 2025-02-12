import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function RootLayout() {
  return (
    <div>
      <Header />
        <div style={{ minHeight: "70vh" }}>
            {" "}
            <Outlet />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  );
}

export default RootLayout;