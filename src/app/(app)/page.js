import HeroSection from '@/components/home/HeroSection';
import ShopByOccasion from '@/components/home/ShopByOccasion';
import Sustainability from '@/components/home/Sustainability';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import ArtisanEdit from '@/components/home/ArtisanEdit.jsx';
import ShopByCategory from '@/components/home/ShopByCategory';
import Features from '@/components/home/Features';
import FAQ from '@/components/home/FAQ';
import StayInspired from '@/components/home/StayInspired';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ShopByOccasion />
      <Sustainability />
      <FeaturedProducts />
      <ArtisanEdit />
      <ShopByCategory />
      <Features />
      <FAQ />
      <StayInspired />
    </div>
  );
}
