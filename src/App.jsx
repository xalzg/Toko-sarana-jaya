import React, { useState } from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Marquee from "./components/Marquee";
import PricingCatalog from "./components/PricingCatalog";
import AboutProfile from "./components/AboutProfile";
import DarkBannerFeatures from "./components/DarkBannerFeatures";
import Services from "./components/Services";
import CalloutBanner from "./components/CalloutBanner";
import Gallery from "./components/Gallery";
import Faq from "./components/Faq";
import MidBanner from "./components/MidBanner";
import Blog from "./components/Blog";
import LocationMap from "./components/LocationMap";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import BookingModal from "./components/BookingModal";
import PreviewModal from "./components/PreviewModal";
import Toast from "./components/Toast";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [previewData, setPreviewData] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const [catalogCategory, setCatalogCategory] = useState("all");

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleOpenPreview = (data) => {
    setPreviewData(data);
  };

  const handleClosePreview = () => {
    setPreviewData(null);
  };

  const handleSelectCatalogCategory = (category) => {
    setCatalogCategory(category);
  };

  return (
    <div className="min-h-screen bg-[#F6F8FC] text-slate-900 font-sans antialiased selection:bg-butter-300 selection:text-cobalt-950 flex flex-col">
      {/* 1. Top Bar Kontak */}
      <TopBar />

      {/* 2. Navbar Industrial */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onSelectCatalogCategory={handleSelectCatalogCategory}
        />

        {/* 4. Statistik Ringkas */}
        <Stats />

        {/* 5. Marquee Ticker */}
        <Marquee />

        {/* 6. Daftar Harga & Katalog Layanan */}
        <PricingCatalog
          activeFilter={catalogCategory}
          onFilterChange={setCatalogCategory}
        />

        {/* 7. Profil Bengkel */}
        <AboutProfile />

        {/* 8. Banner Dark + Fitur Unggulan */}
        <DarkBannerFeatures />

        {/* 9. Spesialisasi Layanan */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* 10. Callout Banner & Gambar Lebar */}
        <CalloutBanner />

        {/* 11. Galeri Pengerjaan */}
        <Gallery onPreviewGallery={handleOpenPreview} />

        {/* 12. FAQ Accordion */}
        <Faq />

        {/* 13. Mid Banner Royal Blue */}
        <MidBanner />

        {/* 14. Blog & Catatan Mekanik */}
        <Blog
          onOpenArticle={(art) =>
            handleOpenPreview({
              title: art.title,
              image: art.img,
              description: art.content,
            })
          }
          onOpenBooking={handleOpenBooking}
        />

        {/* 15. Lokasi & Peta Interaktif */}
        <LocationMap onShowToast={showToast} />
      </main>

      {/* 16. Footer */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Modals & Toast */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
      />
      <PreviewModal
        previewData={previewData}
        onClose={handleClosePreview}
      />
      <Toast message={toastMessage} />
    </div>
  );
}
