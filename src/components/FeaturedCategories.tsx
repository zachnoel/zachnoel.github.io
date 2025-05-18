
import React from 'react';
import CategoryCard from './CategoryCard';

const FeaturedCategories = () => {
  const categories = [
    {
      id: 1,
      title: 'Body Armor',
      description: 'Professional grade body armor for law enforcement, military, and civilian use.',
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3',
      link: '/body-armor',
    },
    {
      id: 2,
      title: 'Nightvision / IR',
      description: 'Advanced night vision and infrared optics for tactical operations.',
      imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3',
      link: '/nightvision',
    },
    {
      id: 3,
      title: 'Weapon Sites',
      description: 'Precision optics and sights to enhance accuracy and target acquisition.',
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3',
      link: '/weapon-sites',
    },
    {
      id: 4,
      title: 'Lighting',
      description: 'Tactical illumination solutions for any environment or mission.',
      imageUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3',
      link: '/lighting',
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              description={category.description}
              imageUrl={category.imageUrl}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
