import NavBar from "./NavBar";

const DefaultLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <NavBar />
    <main className="flex-1">{children}</main>
  </div>
);

export default DefaultLayout;
