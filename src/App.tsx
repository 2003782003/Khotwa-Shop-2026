import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useStore } from './lib/store';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductLandingPage from './pages/ProductLandingPage';
import OrderPage from './pages/OrderPage';
import CartPage from './pages/CartPage';
import InvoicePage from './pages/InvoicePage';
import TrackOrderPage from './pages/TrackOrderPage';
import AdminPage from './pages/AdminPage';
import { AboutPage, PrivacyPage, TermsPage, ContactPage, DataProtectionPage } from './pages/StaticPages';
import WhatsAppFloat from './components/WhatsAppFloat';

function AppLayout({ children }: { children: React.ReactNode }) {
  const { lang } = useStore();
  return (
    <div className="min-h-screen flex flex-col" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout><HomePage /></AppLayout>} />
        <Route path="/products" element={<AppLayout><ProductsPage /></AppLayout>} />
        <Route path="/product/:id" element={<AppLayout><ProductDetailPage /></AppLayout>} />
        <Route path="/landing/:id" element={<AppLayout><ProductLandingPage /></AppLayout>} />
        <Route path="/order/:id" element={<AppLayout><OrderPage /></AppLayout>} />
        <Route path="/cart" element={<AppLayout><CartPage /></AppLayout>} />
        <Route path="/invoice/:orderId" element={<AppLayout><InvoicePage /></AppLayout>} />
        <Route path="/track-order" element={<AppLayout><TrackOrderPage /></AppLayout>} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/about" element={<AppLayout><AboutPage /></AppLayout>} />
        <Route path="/privacy" element={<AppLayout><PrivacyPage /></AppLayout>} />
        <Route path="/terms" element={<AppLayout><TermsPage /></AppLayout>} />
        <Route path="/contact" element={<AppLayout><ContactPage /></AppLayout>} />
        <Route path="/data-protection" element={<AppLayout><DataProtectionPage /></AppLayout>} />
      </Routes>
    </BrowserRouter>
  );
}
