import { Header } from "./components/Header";
import { PropertySection } from "./components/Property";
import { Media } from "./components/Media";
import { ProcessOverview } from "./components/Overview";
import { ComfortFamilyHouses } from "./components/FamilyHouses";
import { FastForward } from "./components/FastForward";
import { ApartmentList } from "./components/PropertyGallery";
import { LocationInfo } from "./components/Locations";
import { FamilyPriority } from "./components/Priority";
import { ClientTestimonial } from "./components/Testimonials";
import { LatestPostList } from "./components/Posts";
import { Footer } from "./components/Footer";
import { FooterInfo } from "./components/FooterInfo";


function App() {
  return (
    <>
      <Header />
      <PropertySection />
      <Media />
      <ProcessOverview />
      <ComfortFamilyHouses />
      <FastForward />
      <ApartmentList />
      <LocationInfo />
      <FamilyPriority />
      <ClientTestimonial />
      <LatestPostList />
      <Footer />
      <FooterInfo/>
    </>
  );
}
export default App;
