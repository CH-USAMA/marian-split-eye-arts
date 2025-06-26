
import React, { useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Contact from '../components/Contact';
import { Eye, EyeOff } from 'lucide-react';

const Index = () => {
  const [leftRevealed, setLeftRevealed] = useState(false);
  const [rightRevealed, setRightRevealed] = useState(false);

  const products = [
    {
      title: "Sacred Madonna",
      description: "Hand-painted icon of the Blessed Virgin Mary, crafted with traditional Byzantine techniques and gold leaf accents.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop&crop=center",
      price: "$450"
    },
    {
      title: "Guardian Angel",
      description: "Beautiful representation of the Guardian Angel, perfect for home altars and prayer spaces.",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=500&h=600&fit=crop&crop=center",
      price: "$320"
    },
    {
      title: "Holy Cross",
      description: "Intricately carved wooden crucifix with detailed metalwork, a centerpiece for any sacred space.",
      image: "https://images.unsplash.com/photo-1593080358201-5eaeb0ba3df3?w=500&h=600&fit=crop&crop=center",
      price: "$280"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Split Screen Section */}
      <section className="h-screen flex relative overflow-hidden">
        {/* Left Side */}
        <div 
          className="w-1/2 relative bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 flex items-center justify-center cursor-pointer transition-all duration-700 hover:w-3/5"
          onMouseEnter={() => setLeftRevealed(true)}
          onMouseLeave={() => setLeftRevealed(false)}
        >
          <div className="text-center z-10 relative">
            <h2 className="text-6xl md:text-8xl font-bold text-amber-800 mb-6 tracking-wider">
              SACRED
            </h2>
            <p className="text-xl text-amber-700 mb-8 max-w-md leading-relaxed">
              Discover divine artistry that elevates your spiritual space
            </p>
            
            {/* Eye reveal effect */}
            <div className="flex justify-center mb-6">
              {leftRevealed ? (
                <Eye className="w-16 h-16 text-amber-600 animate-pulse" />
              ) : (
                <EyeOff className="w-16 h-16 text-amber-600/70" />
              )}
            </div>
          </div>
          
          {/* Background pattern */}
          <div className={`absolute inset-0 bg-gradient-to-br from-amber-200/30 to-amber-400/30 transition-opacity duration-500 ${leftRevealed ? 'opacity-100' : 'opacity-60'}`}>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23d97706" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          </div>
        </div>

        {/* Right Side */}
        <div 
          className="w-1/2 relative bg-gradient-to-bl from-slate-800 via-slate-700 to-amber-900 flex items-center justify-center cursor-pointer transition-all duration-700 hover:w-3/5"
          onMouseEnter={() => setRightRevealed(true)}
          onMouseLeave={() => setRightRevealed(false)}
        >
          <div className="text-center z-10 relative">
            <h2 className="text-6xl md:text-8xl font-bold text-amber-100 mb-6 tracking-wider">
              ARTS
            </h2>
            <p className="text-xl text-amber-200 mb-8 max-w-md leading-relaxed">
              Handcrafted holy art for worship, meditation, and devotion
            </p>
            
            {/* Eye reveal effect */}
            <div className="flex justify-center mb-6">
              {rightRevealed ? (
                <Eye className="w-16 h-16 text-amber-300 animate-pulse" />
              ) : (
                <EyeOff className="w-16 h-16 text-amber-300/70" />
              )}
            </div>
          </div>
          
          {/* Background pattern */}
          <div className={`absolute inset-0 bg-gradient-to-bl from-slate-700/30 to-amber-800/30 transition-opacity duration-500 ${rightRevealed ? 'opacity-100' : 'opacity-60'}`}>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f59e0b" fill-opacity="0.1"%3E%3Cpath d="M30 30l15-15v30z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          </div>
        </div>

        {/* Center Logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-8 shadow-2xl border-4 border-amber-300">
          <h1 className="text-2xl md:text-3xl font-bold text-amber-800 text-center tracking-wider">
            MARIAN<br/>HOLYARTS
          </h1>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="gallery" className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-6">
              Sacred Collection
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
              Each piece in our collection is carefully crafted to inspire devotion and create sacred spaces 
              that draw the heart closer to the divine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
              />
            ))}
          </div>

          <div className="text-center mt-16">
            <a 
              href="#contact"
              className="inline-block bg-gradient-to-r from-amber-600 to-amber-700 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Full Collection
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-amber-100 to-amber-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-8">
              Crafting Sacred Beauty
            </h2>
            <p className="text-xl text-amber-700 leading-relaxed mb-8">
              At Marian HolyArts, we believe that sacred art has the power to transform spaces and souls. 
              Our artisans combine traditional techniques with contemporary craftsmanship to create pieces 
              that inspire prayer, meditation, and spiritual reflection.
            </p>
            <p className="text-lg text-amber-600 leading-relaxed">
              From hand-painted icons to carved crucifixes, each piece is created with reverence and 
              attention to detail, making them perfect for churches, homes, and prayer spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Index;
