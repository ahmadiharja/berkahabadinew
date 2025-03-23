
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import NavigationMenu from "./components/layout/NavigationMenu";
import OpeningModal from "./components/layout/afifiliatemodal/openingmodal";
import HomePage from "./pages/HomePage";
import KatalogProduk from "./pages/KatalogProduk";
import Profile from "./pages/Profile";
import CompanyPage from "./pages/perusahaan";
import ProfileYayasan from "./components/layout/ProfileYayasan";
import ProfileAlatPromosi from "./components/layout/ProfileAlatPromosi";
import ProfileBonus from "./components/layout/ProfileBonus";
import Cart from "./components/layout/Cart";

function AppContent() {
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => {
    if (location.pathname === '/products') return 'products';
    if (location.pathname === '/profile') return 'profile';
    if (location.pathname === '/about') return 'about';
    return 'home';
  });

  useEffect(() => {
    if (location.state?.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [location]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] relative overflow-x-hidden">
      <div className="mx-auto max-w-3xl bg-[var(--bg-primary)] min-h-screen flex flex-col relative transition-all duration-300 lg:px-6">
      <OpeningModal />
      {location.pathname !== '/products' && <Header />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<CompanyPage />} />
          <Route path="/products" element={<KatalogProduk />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/yayasan" element={<ProfileYayasan />} />
          <Route path="/profile/promosi" element={<ProfileAlatPromosi />} />
          <Route path="/profile/bonus" element={<ProfileBonus />} />
          <Route path="/profile/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      
      {location.pathname !== '/products' && (
        <NavigationMenu activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
    </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
