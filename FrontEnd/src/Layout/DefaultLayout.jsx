import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const DefaultLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <NavBar />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default DefaultLayout;
