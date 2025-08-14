// src/contexts/NavigationContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

type NavigationContextType = {
    currentPage: number;
    totalPages: number;
    goNext: () => void;
    goPrev: () => void;
    updateCurrentPage: (page) => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider = ({
    children,
    totalPages = 4 // Default value added here
}: {
    children: ReactNode;
    totalPages?: number // Made optional
}) => {
    const [currentPage, setCurrentPage] = useState(1);

    const updateCurrentPage = (page) => {
        setCurrentPage(page)
    }

    const goNext = () => {
        setCurrentPage(prev => prev === totalPages ? 1 : prev + 1);
    };

    const goPrev = () => {
        setCurrentPage(prev => prev === 1 ? totalPages : prev - 1);
    };

    return (
        <NavigationContext.Provider value={{ currentPage, totalPages, goNext, goPrev, updateCurrentPage }}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error('useNavigation must be used within NavigationProvider');
    }
    return context;
};