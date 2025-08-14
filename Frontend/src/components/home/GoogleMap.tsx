import React from 'react';
import { MapPin } from 'lucide-react';

interface GoogleMapProps {
    center?: { lat: number; lng: number };
    zoom?: number;
    markers?: Array<{
        position: { lat: number; lng: number };
        title: string;
        info?: string;
    }>;
}

const GoogleMap: React.FC<GoogleMapProps> = () => {
    return (
        <div className="relative">
            <div className="w-full h-64 rounded-lg shadow-lg overflow-hidden" style={{ minHeight: '300px' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.201244885277!2d72.8882575!3d19.0548875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c622223de1cb%3A0x93a78774310744a3!2sCryoCorp%2002%20LLP!5e0!3m2!1sen!2sin!4v1754110164119!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Mumbai Location"
                />
            </div>
        </div>
    );
};

export default GoogleMap;