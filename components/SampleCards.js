import Image from 'next/image'

import { useRef, useState, useEffect } from 'react'

const cards = [
  { title: 'Valentines Card', image: 'https://fal.media/files/penguin/yTaNZsv4-ZNdOhWqR5Ife_633ee6cad00f4be7974cab1331654741.jpg', color: 'bg-orange-500' },  
  { title: 'Birthday Card', image: 'https://fal.media/files/panda/Nv4KMUHsZWDZ-sbEpweLU_a644b3bd247c4c849a2ee56a80f94073.jpg', color: 'bg-yellow-500' },
  { title: 'Christmas Card', image: 'https://fal.media/files/koala/nVMnp6E3k95D1xzoYEVpG_cf7702727a1a45aa945c7b10ef2a4515.jpg', color: 'bg-green-500' },
  { title: 'Halloween Card', image: 'https://fal.media/files/kangaroo/TzFicUHUGP8q9xJfbswa3_b4d7b7ccc100409d8a9bc1bc4cc9a706.jpg', color: 'bg-red-500' },
  { title: 'Celebration Card', image: 'https://fal.media/files/penguin/4ogiCLSAjeHlBd4bQLXI2_e97381f30f464551ad20ba74414bf09e.jpg', color: 'bg-pink-500' },
  { title: 'Birthday Card', image: 'https://fal.media/files/penguin/fNMxTbKJJEjowSbm3aTsh_2bcc691bd81c46669146ab2b0914bb04.jpg', color: 'bg-green-500' },
  { title: 'Christmas Card', image: 'https://fal.media/files/zebra/QqQ5wyosNlZceEZUPybhx_da3abeaecb4a46a6ae6f2ce25164eeee.jpg', color: 'bg-red-500' },
  { title: 'Anniversary Card', image: 'https://fal.media/files/panda/2U-pmdtV3Z4lu6h_iwUti_5ac47be34e204adeb0813f1f900790a4.jpg', color: 'bg-pink-500' },
  { title: "Valentine's Card", image: 'https://fal.media/files/monkey/RFj-x48dkPIF3t4ZfstBF_dfc3cf195ec44e88b8c4a3dbe3c80147.jpg', color: 'bg-orange-500' },
  { title: 'Diwali Card', image: 'https://fal.media/files/penguin/25Av007BfJSvqyrlLDYEX_4f3bf4350e524b07a69d6385875d398a.jpg', color: 'bg-yellow-500' },
]

export default function CardGrid() {
  const scrollContainerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const checkButtonVisibility = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftButton(container.scrollLeft > 0);
      setShowRightButton(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 1
      );
    }
  };

  useEffect(() => {
    checkButtonVisibility();
    window.addEventListener('resize', checkButtonVisibility);
    return () => window.removeEventListener('resize', checkButtonVisibility);
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
      setTimeout(checkButtonVisibility, 400);
    }
  };

  return (
    <section className="py-4 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Sample Cards</h2>
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide"
          >
            <div className="flex">
              {cards.map((card, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-64 mx-2 flex flex-col rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="relative h-80 w-full">
                    <Image 
                      src={card.image} 
                      alt={card.title} 
                      layout="fill" 
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className={`p-4 text-center text-white font-semibold ${card.color}`}>
                    {card.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {showLeftButton && (
            <button 
              onClick={() => scroll(-1)} 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {showRightButton && (
            <button 
              onClick={() => scroll(1)} 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}