import React from 'react';

const FullScreenImageWithFilter = () => {
    return (
        <div className="relative h-screen w-screen overflow-hidden">
            {/* Background Image */}
            <img
                src="/about/img1.png" // replace with your own image
                alt="Background"
                className="w-full h-[35rem] absolute inset-0 z-0
                           sm:object-cover object-[center]" // Center-top crop on mobile
            />
        </div>
    );
};

export default FullScreenImageWithFilter;
