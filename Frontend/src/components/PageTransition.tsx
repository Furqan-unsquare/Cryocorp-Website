// src/components/PageTransition.tsx
import { motion } from 'framer-motion';
import { useNavigation } from '../contexts/NavigationContext';

type PageTransitionProps = {
    children: React.ReactNode;
    pageIndex: number;
};

export const PageTransition = ({ children, pageIndex }: PageTransitionProps) => {
    const { currentPage } = useNavigation();
    const direction = currentPage > pageIndex ? 1 : -1;

    return (
        <motion.div
            key={pageIndex}
            initial={{
                x: direction * 100,
                opacity: 0,
                // position: 'absolute' as const,
                width: '100%'
            }}
            animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.5 }
            }}
            exit={{
                x: -direction * 100,
                opacity: 0,
                transition: { duration: 0.5 }
            }}
            className="h-full w-full"
        >
            {children}
        </motion.div>
    );
};