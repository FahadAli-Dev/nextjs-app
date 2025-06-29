import Navbar from "../components/UserNavbar";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default RootLayout;
