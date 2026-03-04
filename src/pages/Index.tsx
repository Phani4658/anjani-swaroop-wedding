import HeroSection from "@/components/HeroSection";
import AnnouncementSection from "@/components/AnnouncementSection";
import EventsTimeline from "@/components/EventsTimeline";
import VenueSection from "@/components/VenueSection";
import LiveStreamSection from "@/components/LiveStreamSection";
import Footer from "@/components/Footer";
import PhotoGallery from "@/components/PhotoGallery";
import CountdownTimer from "@/components/CountdownTimer";
import SplashScreen from "@/components/SplashScreen";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SplashScreen />
      <HeroSection />
      <CountdownTimer />
      <PhotoGallery />
      <AnnouncementSection />
      <EventsTimeline />
      <VenueSection />
      <LiveStreamSection />
      <Footer />
    </div>
  );
};

export default Index;
