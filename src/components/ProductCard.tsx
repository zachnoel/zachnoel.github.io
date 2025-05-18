
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, price, imageUrl }) => {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
      </div>
      <CardContent className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-1">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold">{price}</span>
          <Button className="bg-tactical-green hover:bg-opacity-90">
            Request Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
