import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import SkillsSection from "../components/SkillsSection";
import ServicesSection from "../components/ServicesSection";
import RecentPosts from "../components/RecentPosts";
import TestimonialsSection from "../components/TestimonialsSection";
import FeaturedWorks from "../components/FeaturedWorks";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <HeroSection />

      {/* Stats Section */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <StatsSection />
      </div>

      {/* Skills Section */}
      <div className="bg-gray-50 dark:bg-gray-900 py-4">
        <SkillsSection />
      </div>

      {/* Services Section */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <ServicesSection />
      </div>

      {/* Recent Posts */}
      <RecentPosts />

      {/* Testimonials */}
      <div className="bg-gray-50 dark:bg-gray-900 py-4">
        <TestimonialsSection />
      </div>

      {/* Featured Works */}
      <FeaturedWorks />
    </div>
  );
}
