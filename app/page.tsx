"use client";

import React, { useState } from 'react';
import BannerImageComp from './components/BannerImageComp';
import EditBannerTemplateBs from './components/EditBannerTemplateBs';

const initialBanners = [
  {
    title: "Unleash Your Potential with the Latest Technology",
    description: "Explore our cutting-edge products and services for a brighter future. Contact us today for more information!",
    cta: "Discover More",
    image: "/images/banner1.jpeg",
    background: "linear-gradient(to right, #ff7e5f, #feb47b)"
  },
  {
    title: "Embrace the Future of AI",
    description: "Join us on a journey to explore the most advanced AI technologies. Learn more today!",
    cta: "Learn More",
    image: "/images/banner2.jpeg",
    background: "linear-gradient(to right, #4facfe, #00f2fe)"
  },
  {
    title: "Innovate with Our Solutions",
    description: "Our solutions are designed to bring the best out of your business. Contact us to learn more!",
    cta: "Get Started",
    image: "/images/banner3.jpeg",
    background: "linear-gradient(to right, #42e695, #3bb2b8)"
  },
  {
    title: "Discover Next-Gen Tech",
    description: "Stay ahead with our next-generation technology solutions. Contact us for more details!",
    cta: "Find Out More",
    image: "/images/banner4.jpeg",
    background: "linear-gradient(to right, #f7971e, #ffd200)"
  },
  {
    title: "Revolutionize Your Workflow",
    description: "Experience a revolution in workflow management with our state-of-the-art solutions. Learn more today!",
    cta: "See How",
    image: "/images/banner5.jpeg",
    background: "linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)"
  },
  {
    title: "Transform Your Business",
    description: "Transform your business with our innovative technology solutions. Contact us for more information!",
    cta: "Transform Now",
    image: "/images/banner6.jpeg",
    background: "linear-gradient(to right, #00c6ff, #0072ff)"
  },
];

const HomePage: React.FC = () => {
  const [banners, setBanners] = useState(initialBanners);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBannerIndex, setCurrentBannerIndex] = useState<number | null>(null);

  const handleEdit = (index: number) => {
    setCurrentBannerIndex(index);
    setIsEditing(true);
  };

  const handleSave = (newDetails: { title: string; description: string; cta: string; image: string; background: string; }) => {
    if (currentBannerIndex !== null) {
      const updatedBanners = banners.slice();
      updatedBanners[currentBannerIndex] = newDetails;
      setBanners(updatedBanners);
      setIsEditing(false);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {banners.map((banner, index) => (
        <BannerImageComp
          key={index}
          title={banner.title}
          description={banner.description}
          cta={banner.cta}
          image={banner.image}
          background={banner.background}
          onEdit={() => handleEdit(index)}
        />
      ))}
      {isEditing && currentBannerIndex !== null && (
        <EditBannerTemplateBs
          {...banners[currentBannerIndex]}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default HomePage;
