import React, { useState } from 'react';

const VectorImageSlider = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const vectorImages = [
    {
      id: 'air-compressor',
      src: ['/ASU/compressor.png'],
      alt: 'Air Compressor',
      title: 'Air Compressor',
      number: '01'
    },
    {
      id: 'after-cooler',
      src: ['/ASU/after-cooler.png', '/ASU/cascade-cooler.png'],
      alt: 'After Cooler',
      title: 'After Cooler',
      number: '02'
    },
    {
      id: 'chilling-tank',
      src: ['/ASU/9.png'],
      alt: 'Chilling Tank',
      title: 'Chilling Tank',
      number: '03'
    },
    {
      id: 'frp-cooling-tower',
      src: ['/ASU/6.png'],
      alt: 'FRP Cooling Tower',
      title: 'FRP Cooling Tower',
      number: '04'
    },
    {
      id: 'dust-filter',
      src: ['/ASU/5.png'],
      alt: 'Dust Filter',
      title: 'Dust Filter',
      number: '05'
    },
    {
      id: 'molecular-sieve-battery',
      src: ['/ASU/8.png'],
      alt: 'Molecular Sieve Battery',
      title: 'Molecular Sieve Battery',
      number: '06'
    },
    {
      id: 'air-separation-column',
      src: ['/ASU/10.png'],
      alt: 'Air Separation Column',
      title: 'Air Separation Column',
      number: '07'
    },
    {
      id: 'expansion-engine',
      src: ['/ASU/7.png'],
      alt: 'Expansion Engine',
      title: 'Expansion Engine',
      number: '08'
    },
    {
      id: 'liquid-oxygen-pump',
      src: ['/ASU/4.png'],
      alt: 'Liquid Oxygen Pump',
      title: 'Liquid Oxygen Pump',
      number: '09'
    },
    {
      id: 'oxygen-nitrogen-manifold',
      src: ['/ASU/10th.png'],
      alt: 'Oxygen and Nitrogen Manifold',
      title: 'Oxygen and Nitrogen Manifold',
      number: '10'
    }
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image.id);

    const section = document.getElementById(`${image.id}-section`);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="w-full bg-white py-4 border-b border-gray-300">
      <div className="mx-auto px-4 overflow-x-auto flex">
        <div className="inline-flex items-end space-x-4">
          {vectorImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => handleImageClick(image)}
              className={`inline-flex flex-col items-center cursor-pointer p-2 ${
                selectedImage === image.id ? 'bg-gray-100' : ''
              }`}
              style={{ width: 135, minHeight: 170 }}
            >
              <div
                className="flex justify-center items-end mb-1"
                style={{
                  height: 100, // Matches the reference height for all cards
                  width: '110%'
                }}
              >
                {image.src.length === 2 ? (
                  <>
                    <img
                      src={image.src[1]}
                      alt={`${image.alt} 2`}
                      style={{
                        width: 130,
                        height: 85,
                        objectFit: 'contain'
                      }}
                    />
                  </>
                ) : (
                  <img
                    src={image.src[0]}
                    alt={image.alt}
                    style={{
                      width: 120,
                      height: 100,
                      objectFit: 'contain'
                    }}
                  />
                )}
              </div>
              <div className="text-sm  font-bold text-gray-800 max-w-[125px] leading-tight">
                <span className="block mb-0.5">{`${image.number}.`}</span>
                <span className="block">
                  {image.title.toUpperCase()}
                  {index === 0 && (
                    <span className="block font-base text-[10px]">
                      (KIRLOSKAR /<br />INGERSOLL RAND /<br />Booster Compressor)
                    </span>
                  )}
                  {index === 1 && (
                    <span className="block font-base text-[10px]">
                      &amp; CASCADE COOLER
                    </span>
                  )}
                  {index === 2 && (
                    <span className="block font-base text-[10px]">CHILLING UNIT</span>
                  )}
                  {index === 4 && (
                    <span className="block font-base text-[10px]">OIL ABSORBER</span>
                  )}
                  {index === 8 && (
                    <span className="block font-base text-[10px]">
                      &amp; Liquid Nitrogen Pump
                    </span>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VectorImageSlider;
