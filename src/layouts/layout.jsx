import Footer from "../components/layout/footer/footer";
import Header from "../components/layout/header/header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header fixed at top */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <Header />
      </header>

      {/* Main content with padding for fixed header */}
      <main className="flex-grow mt-16 px-4 md:px-8 py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
