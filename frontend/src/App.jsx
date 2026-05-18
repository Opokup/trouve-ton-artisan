import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Artisans from "./pages/Artisans";
import ArtisanDetail from "./pages/ArtisanDetail";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/artisans" element={<Artisans />} />

          <Route path="/artisan/:id" element={<ArtisanDetail />} />

          <Route path="/mentions-legales" element={<Legal />} />
          <Route path="/donnees-personnelles" element={<Legal />} />
          <Route path="/accessibilite" element={<Legal />} />
          <Route path="/cookies" element={<Legal />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;