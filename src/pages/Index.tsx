
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
      title: "Sacred Madonna T-Shirt",
      description: "Premium cotton t-shirt featuring hand-painted Madonna design, perfect for pilgrimage tours and daily wear.",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop&crop=center",
      price: "$45"
    },
    {
      title: "Pilgrimage Guide Package",
      description: "Complete pilgrimage planning service with holy art guidebook and commemorative items for your spiritual journey.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop&crop=center",
      price: "$180"
    },
    {
      title: "Seasonal Holy Cross",
      description: "Limited edition seasonal crosses with special occasion blessings, perfect for Christmas and Easter celebrations.",
      image: "https://images.unsplash.com/photo-1578662754406-dc664c4d8f5f?w=500&h=600&fit=crop&crop=center",
      price: "$120"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Split Screen Section */}
      <section className="h-screen flex relative overflow-hidden">
        {/* Left Side */}
        <div 
          className="w-1/2 relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 flex items-center justify-center cursor-pointer transition-all duration-700 hover:w-3/5"
          onMouseEnter={() => setLeftRevealed(true)}
          onMouseLeave={() => setLeftRevealed(false)}
        >
          <div className="text-center z-10 relative">
            <h2 className="text-6xl md:text-8xl font-bold text-blue-800 mb-6 tracking-wider">
              HOLY
            </h2>
            <p className="text-xl text-blue-700 mb-8 max-w-md leading-relaxed">
              Tour Planning & Guiding for Sacred Journeys and Pilgrimages
            </p>
            
            {/* Eye reveal effect */}
            <div className="flex justify-center mb-6">
              {leftRevealed ? (
                <Eye className="w-16 h-16 text-blue-600 animate-pulse" />
              ) : (
                <EyeOff className="w-16 h-16 text-blue-600/70" />
              )}
            </div>
          </div>
          
          {/* Background pattern */}
          <div className={`absolute inset-0 bg-gradient-to-br from-blue-200/30 to-blue-400/30 transition-opacity duration-500 ${leftRevealed ? 'opacity-100' : 'opacity-60'}`}>
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
        </div>

        {/* Right Side */}
        <div 
          className="w-1/2 relative bg-gradient-to-bl from-slate-800 via-slate-700 to-blue-900 flex items-center justify-center cursor-pointer transition-all duration-700 hover:w-3/5"
          onMouseEnter={() => setRightRevealed(true)}
          onMouseLeave={() => setRightRevealed(false)}
        >
          <div className="text-center z-10 relative">
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-wider">
              ARTS
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-md leading-relaxed">
              Religious Items, Seasonal Gifts & Special Occasions Collection
            </p>
            
            {/* Eye reveal effect */}
            <div className="flex justify-center mb-6">
              {rightRevealed ? (
                <Eye className="w-16 h-16 text-blue-300 animate-pulse" />
              ) : (
                <EyeOff className="w-16 h-16 text-blue-300/70" />
              )}
            </div>
          </div>
          
          {/* Background pattern */}
          <div className={`absolute inset-0 bg-gradient-to-bl from-slate-700/30 to-blue-800/30 transition-opacity duration-500 ${rightRevealed ? 'opacity-100' : 'opacity-60'}`}>
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Cpath d='M30 30l15-15v30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
        </div>

        {/* Center Logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm rounded-full p-8 shadow-2xl border-4 border-blue-300">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-800 text-center tracking-wider">
            MARIAN<br/>HOLYARTS
          </h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
              Our Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Tour Planning & Guiding</h3>
              <p className="text-blue-600">Expert guidance for spiritual journeys</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Pilgrimages</h3>
              <p className="text-blue-600">Sacred pilgrimage experiences</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Holy Art & Religious Items</h3>
              <p className="text-blue-600">Authentic sacred artwork and items</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Special Occasions & Seasonal Gifts</h3>
              <p className="text-blue-600">Meaningful gifts for sacred moments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="gallery" className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
              Featured Collection
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
              Discover our seasonal products, pilgrimage essentials, and sacred items that bring meaning 
              to your spiritual journey and special occasions.
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
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Full Collection
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-blue-100 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-8">
              Sacred Journeys & Holy Arts
            </h2>
            <p className="text-xl text-blue-700 leading-relaxed mb-8">
              At Marian HolyArts, we specialize in creating meaningful spiritual experiences through expert 
              tour planning, guided pilgrimages, and authentic holy art. Our seasonal collections and 
              special occasion items are carefully curated to inspire faith and devotion.
            </p>
            <p className="text-lg text-blue-600 leading-relaxed">
              From personalized pilgrimage tours to sacred artwork and seasonal gifts, we're here to 
              support your spiritual journey with quality products and expert guidance.
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
