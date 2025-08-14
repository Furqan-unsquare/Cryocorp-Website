import React from "react";

const VideoHero = () => {
  return (
    <section className="relative m-auto h-[115vh] bg-white overflow-hidden">

      {/* WHY - starting at top-left corner */}
      <div className="animate-why-path z-20">
        <h1 className="text-4xl md:text-8xl font-bold uppercase text-black whitespace-nowrap">WHY</h1>
      </div>

      {/* CRYOCORP? - starting at bottom-right corner */}
      <div className="animate-cryocorp-path z-10">
        <h1 className="text-4xl md:text-8xl font-bold uppercase text-black whitespace-nowrap">CRYOCORP?</h1>
      </div>

      {/* Single animated image */}
      <div className="animate-single-image">
        <img
          src="images.png"
          alt="Tech workspace"
          className="w-24 h-24 md:w-32 md:h-32 rounded-lg shadow-lg object-cover "
          loading="lazy"
        />
      </div>

      {/* Double animated image */}
      <div className="animate-second-image">
        <img
          src="image3.jpg"
          alt="Tech workspace"
          className="w-24 h-24 md:w-32 md:h-32 rounded-lg shadow-lg object-cover "
          loading="lazy"
        />
      </div>

      {/* Third animated image */}
      <div className="animate-third-image">
        <img
          src="images.png"
          alt="Tech workspace"
          className="w-24 h-24 md:w-32 md:h-32 rounded-lg shadow-lg object-cover "
          loading="lazy"
        />
      </div>

      {/* fourth animated image */}
      <div className="animate-fourth-image">
        <img
          src="image3.jpg"
          alt="Tech workspace"
          className="w-24 h-24 md:w-32 md:h-32 rounded-lg shadow-lg object-cover "
          loading="lazy"
        />
      </div>

      {/* fifth animated image */}
      <div className="animate-fifth-image">
        <img
          src="image.png"
          alt="Tech workspace"
          className="w-24 h-24 md:w-32 md:h-32 rounded-lg shadow-lg object-cover "
          loading="lazy"
        />
      </div>

      {/* sixth animated image */}
      <div className="animate-sixth-image">
        <img
          src="image1.jpg"
          alt="Tech workspace"
          className="w-24 h-24 md:w-32 md:h-32 rounded-lg shadow-lg object-cover "
          loading="lazy"
        />
      </div>

      {/* seventh animated image */}
      <div className="animate-seventh-image">
        <img
          src="image2.jpg"
          alt="Tech workspace"
          className="w-24 h-24 md:w-32 md:h-32 rounded-lg shadow-lg object-cover "
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default VideoHero;