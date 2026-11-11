import React, { useState } from "react";
import Hero from "./components/Hero";
import ServiceShowcase from "./components/ServiceShowcase";
import VoicesTestimonials from "./components/VoicesTestimonials";
import AreaConcepts from "./components/AreaConcepts";
import ArticleSlider from "./components/ArticleSlider";
import LocationCta from "./components/LocationCta";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import BookingModal from "./components/BookingModal";
import ArticleModal from "./components/ArticleModal";
import Toast from "./components/Toast";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

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

  const handleOpenArticle = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="max-w-[1220px] mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-6 sm:space-y-8">
      {/* ================= 1. HERO + OVERLAPPING BENTO GRID + LAYANAN ================= */}
      <div className="bg-[#ECEEF2] rounded-[32px] sm:rounded-[40px] p-2.5 sm:p-4 shadow-soft overflow-hidden">
        <Hero onOpenBooking={handleOpenBooking} />
        <ServiceShowcase />
      </div>

      {/* ================= 2. VOICES + AREA + TIPS + CTA/LOCATION + FOOTER ================= */}
      <div className="bg-[#ECEEF2] rounded-[32px] sm:rounded-[40px] p-4 sm:p-8 shadow-soft overflow-hidden space-y-16 sm:space-y-20">
        <VoicesTestimonials />
        <AreaConcepts />
        <ArticleSlider onOpenArticle={handleOpenArticle} />
        <LocationCta
          onOpenBooking={handleOpenBooking}
          onShowToast={showToast}
        />
        <Footer />
      </div>

      {/* ================= FLOATING WHATSAPP ================= */}
      <FloatingWhatsApp />

      {/* ================= MODALS & TOAST ================= */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
      />
      <ArticleModal
        article={selectedArticle}
        onClose={handleCloseArticle}
      />
      <Toast message={toastMessage} />
    </div>
  );
}
