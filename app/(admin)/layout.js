import Navbar from "../components/AdminNavbar";
import "../globals.css";

function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default RootLayout;
