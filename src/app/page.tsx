import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import Achievements from "@/app/components/Achievements";
import Courses from "@/app/components/Courses";
import Footer from "@/app/components/Footer";
import TrustedSection from "./components/TrustedSection";
import CourseCategories from "./components/CourseCategories";
import TeamSection from "./components/TeamSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TrustedSection />
      <CourseCategories />
      <Achievements />
      <Courses />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Home;
