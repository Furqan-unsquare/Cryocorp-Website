import React from 'react';

const FullScreenImageWithFilter = () => {
    return (
        <div className="relative h-screen w-screen overflow-hidden">
            {/* Background Image */}
            <img
                src="/services/img5.png"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover md:object-center object-top z-0"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        </div>
    );
};

export default FullScreenImageWithFilter;
