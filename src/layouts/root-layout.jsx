import Footer from "./footer-layout";
import Header from "./header-layout";

const RootLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header role="banner" />
      <main role="main">{children}</main>
      <Footer role="contentinfo" />
    </div>
  );
};

export default RootLayout;
