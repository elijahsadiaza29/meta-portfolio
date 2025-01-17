import Hero from "./pages/hero-page/hero-section";
import RootLayout from "./layouts/root-layout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
