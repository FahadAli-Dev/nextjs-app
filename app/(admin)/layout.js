import Navbar from "./components/Navbar.jsx";
import "../globals.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
