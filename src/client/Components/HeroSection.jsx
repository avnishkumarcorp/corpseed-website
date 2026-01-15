
import React from 'react'
const HeroSection = ({ image, badgeText, title, description, }) => {
   return ( 
    <section className="relative w-full h-96 overflow-hidden"> 
   <img src={image} className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="absolute inset-0 flex flex-col gap-4 justify-center px-6 md:px-12 lg:px-20">
    {badgeText && (
      <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded w-fit">
        {badgeText}
      </span>
    )}

    <h1 className="text-3xl md:text-5xl font-bold text-white">
      {title}
    </h1>

    {description && (
      <p className="max-w-xl text-white text-sm">
        {description}
      </p>
    )}
  </div>
    </section>
   )
  }
export default HeroSection