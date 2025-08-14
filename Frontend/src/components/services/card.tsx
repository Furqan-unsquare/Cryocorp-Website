import React from 'react';

const CardGrid = () => {
        const cards = [
        {
            title: 'PSA OXYGEN PLANT',
            content: '(93-96% purity Oxygen from Air) with technicians & spares support',
            image: '/services/img2.png',
            back: `1. Critical Maintenance Consultancy for PSA Oxygen Plants (93–96% purity) with technicians & spares support
Ensure your PSA Oxygen Plant runs smoothly year-round with expert maintenance and rapid-response technical support. AMC covers scheduled service visits for peace of mind, while CMC offers all-inclusive coverage—including parts and emergency breakdowns—so you avoid unexpected costs and downtime. This keeps your plant compliant, efficient, and always ready to deliver high-purity oxygen.
`,
        },
        {
            title: 'PSA NITROGEN PLANT',
            content: '(93-96% purity Nitrogen from Air) with technicians & spares support',
            image: '/services/img2.png',
            back: `2. Critical Maintenance Consultancy for PSA Nitrogen Plants (93-96% purity) with technicians & spares support  
Keep your PSA Nitrogen Plant operating at peak efficiency with regular preventive maintenance and skilled technician support. Both AMC and CMC options help reduce operational interruptions and extend equipment life, with CMC providing comprehensive coverage for all parts and repairs—ideal for businesses that can’t afford unscheduled stoppages.
`,
        },
        {
            title: 'ASU OXYGEN PLANT',
            content: '(99%+ purity Oxygen from Air) with technicians & spares support',
            image: '/services/img3.png',
            back: 'Maximize uptime and regulatory compliance for your ASU Oxygen Plant with specialized maintenance and relocation services. From advanced diagnostics to critical spares, our team ensures seamless, ultra-high purity oxygen production. Need to relocate? We have done it—successfully shifted a live plant from Nashik to Yemen, including export, erection, and commissioning support. Whether it’s routine servicing or a full-scale move, we keep your operations uninterrupted and future-ready.',
        },
        {
            title: 'ASU NITROGEN PLANT',
            content: '(99%+ purity Nitrogen from Air) with technicians & spares support',
            image: '/services/img3.png',
            back: `Guarantee consistent, high-purity nitrogen output with proactive maintenance and rapid-response troubleshooting. Our AMC/CMC services include skilled technical support and spare parts management, reducing the risk of costly failures and keeping your plant running at optimal performance.`,
        },
        {
            title: 'ACETYLENE PLANT',
            content: 'with technicians & spares support',
            image: '/services/img4.png',
            back: `Stay safe and compliant with dedicated maintenance for your Acetylene Plant, where reliability and safety are paramount. Our contracts provide expert inspections, preventive care, and immediate access to spares—helping you avoid hazardous breakdowns and maintain smooth, continuous operations.`,
        },
        {
            title: 'LIQUID BOTTLING UNIT',
            content: ' (Storing and Distribution) of Industrial Gases (Liquid Oxygen, Nitrogen, CO₂, Argon, Hydrogen) with technicians & spares support',
            image: '/services/img4.png',
            back: 'Protect your bottling operations with tailored maintenance contracts that cover the complex needs of liquid gas storage and distribution systems. With expert technicians and timely spares, you minimize risks of leaks, contamination, or supply chain disruptions, ensuring safe and reliable gas delivery for your customers.',
            last:"true"
        }
    ];

    return (
        <section id="servicecards" className="relative min-h-[200vh] bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden py-16 px-4 flex items-center justify-center">
            {/* Animated Background Blobs (Twice across height) */}
            <div className="absolute inset-0 z-0">
                {/* Set 1 */}
                <div
                    className="absolute w-[400px] h-[400px] rounded-full opacity-80 animate-bounce-x blur-sm"
                    style={{
                        background: `radial-gradient(circle at 30% 30%, #A1FFCE 0%, #58D68D 60%, transparent 80%)`,
                        top: '5%',
                        left: '30%',
                    }}
                />
                <div
                    className="absolute w-[400px] h-[400px] rounded-full opacity-80 animate-bounce-y blur-sm"
                    style={{
                        background: `radial-gradient(circle at 70% 30%, #0B3C5D 0%, #1B263B 60%, transparent 80%)`,
                        top: '30%',
                        left: '5%',
                    }}
                />
                <div
                    className="absolute w-[400px] h-[400px] rounded-full opacity-70 animate-bounce-diagonal blur-sm"
                    style={{
                        background: `radial-gradient(circle at 30% 70%, #138D75 0%, #0E6655 60%, transparent 80%)`,
                        top: '40%',
                        right: '10%',
                    }}
                />
                <div
                    className="absolute w-[400px] h-[400px] rounded-full opacity-70 animate-bounce-x blur-sm"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, #0B3C5D 0%, #1B263B 70%, transparent 90%)`,
                        top: '60%',
                        left: '55%',
                    }}
                />

                {/* Set 2 - for lower half */}
                <div
                    className="absolute w-[400px] h-[400px] rounded-full opacity-50 animate-bounce-y blur-sm"
                    style={{
                        background: `radial-gradient(circle at 70% 30%, #58D68D 0%, #138D75 60%, transparent 80%)`,
                        top: '70%',
                        left: '75%',
                    }}
                />
                <div
                    className="absolute w-[400px] h-[400px] rounded-full opacity-50 animate-bounce-x blur-sm"
                    style={{
                        background: `radial-gradient(circle at 30% 30%, #A1FFCE 0%, #58D68D 60%, transparent 80%)`,
                        top: '40%',
                        left: '25%',
                    }}
                />
                <div
                    className="absolute w-[400px] h-[400px] rounded-full opacity-40 animate-bounce-diagonal blur-sm"
                    style={{
                        background: `radial-gradient(circle at 30% 70%, #138D75 0%, #0E6655 60%, transparent 80%)`,
                        top: '130%',
                        right: '10%',
                    }}
                />
                <div
                    className="absolute w-[400px] h-[400px] rounded-full opacity-40 animate-bounce-x blur-sm"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, #0B3C5D 0%, #1B263B 70%, transparent 90%)`,
                        top: '160%',
                        left: '55%',
                    }}
                />
            </div>

            {/* 🔥 Overlay - z-10 */}
            <div className="absolute inset-0 z-10 backdrop-blur-2xl bg-white/30" />

            {/* Card Grid Content */}
            <div className='relative z-20 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10'>
            {cards.map((card, index) => (
                <div
                key={index}
                className="group relative w-full h-[475px] [perspective:1200px]"
                >
                <div className="relative w-full h-[475px] [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
                    {/* Front Side */}
                    <div className="absolute inset-0 bg-white shadow-2xl border border-white rounded-2xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(0deg)]">
                    <div className="p-5">
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">{card.title}</h2>
                        {card?.last == "true" ? <p className="text-slate-600 pt-[150px]">{card.content}</p>:<p className="text-slate-600 pt-[200px]">{card.content}</p>}
                        
                    </div>
                    <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-[300px]"
                    />
                    </div>

                    {/* Back Side */}
                    <div
                    className="absolute inset-0 rounded-2xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden] bg-cover bg-center"
                    style={{ backgroundImage: `url(${card.image})` }}
                    >
                    <div className="absolute inset-0 bg-black/40" />
                    <h2 className="absolute top-6 left-6 text-2xl font-bold text-gray-200 z-10">
                        {card.title}
                    </h2>
                    <p className="absolute bottom-6 left-6 text-gray-200 z-10 w-[90%] text-justify">
                        {card.back}
                    </p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </section>
    );}
    
export default CardGrid;