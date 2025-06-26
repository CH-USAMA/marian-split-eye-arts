
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
}

const ProductCard = ({ title, description, image, price }: ProductCardProps) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-xl bg-white/10 backdrop-blur-sm border border-blue-200/30 transition-all duration-700 hover:shadow-2xl hover:scale-105"
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
    >
      <div className="relative h-80 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Eye reveal overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${isRevealed ? 'opacity-0' : 'opacity-100'}`}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {isRevealed ? (
              <Eye className="w-12 h-12 text-blue-300 animate-pulse" />
            ) : (
              <EyeOff className="w-12 h-12 text-blue-300/70" />
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
        <p className="text-blue-700 mb-4 leading-relaxed">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-900">{price}</span>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105">
            Inquire
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
