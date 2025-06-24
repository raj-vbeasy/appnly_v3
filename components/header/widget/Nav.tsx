import RoundedButton from '@/components/utilities/buttons/RoundedButton';
import InfoBase from '@/components/utilities/paragraphs/InfoBase';
import ContactModal from '@/components/modal/ContactUs';
import { headerContents } from '@/contents/headerContents';
import { FC, useState, useCallback, useEffect } from 'react'

const Nav: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false); // Add state for contact modal

    // Track current path and force close menu on any navigation
    useEffect(() => {
        const handleRouteChange = () => {
            setIsOpen(false);
        };

        // Listen for route changes
        window.addEventListener('beforeunload', handleRouteChange);
        window.addEventListener('popstate', handleRouteChange);
        
        return () => {
            window.removeEventListener('beforeunload', handleRouteChange);
            window.removeEventListener('popstate', handleRouteChange);
            setIsOpen(false); // Cleanup on unmount
        };
    }, []);

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    const handleNavClick = useCallback(() => {
        setIsOpen(false);
    }, []);

    // Add handlers for contact modal
    const openContactModal = useCallback(() => {
        setIsContactModalOpen(true);
        setIsOpen(false); // Close mobile menu if open
    }, []);

    const closeContactModal = useCallback(() => {
        setIsContactModalOpen(false);
    }, []);

const navigationLinks = headerContents.links;

    return (
        <>

            {/* Desktop Navigation */}
            <div className="flex gap-6 w-fit items-center pointer-events-auto md:hidden">
                {navigationLinks.map(({href,name},i) => {
                    return (
                        <a
                            href={href}
                            key={`desktop-${name}-${i}`}
                            className="relative group"
                        >
                            <InfoBase>{name}</InfoBase>
                            <div 
                                className="group-hover:scale-x-100 scale-x-0 origin-left absolute bottom-0 left-0 right-0 bg-surface-outline h-[1px]"
                                style={{transition: "scale 0.2s linear"}}
                            ></div>
                        </a>
                    )
                })}
                {/* Add onClick handler to contact button */}
                <div onClick={openContactModal}>
                    <RoundedButton>{headerContents.contactButton}</RoundedButton>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="hidden md:flex items-center pointer-events-auto">
                <button
                    onClick={toggleMenu}
                    className="flex flex-col justify-center items-center w-8 h-8 relative z-50"
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-secondary transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-secondary mt-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-secondary mt-1 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>

                {/* Mobile Dropdown - Use regular anchor tags for navigation */}
                <div className={`absolute top-full right-0 mt-4 bg-white border border-surface-outline rounded-lg shadow-lg transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} style={{msOverflowStyle: 'none', scrollbarWidth: 'none'}}>
                    <div className="flex flex-col p-4 min-w-[200px]">
                        {navigationLinks.map(({href,name},i) => {
                            return (
                                <a
                                    href={href}
                                    key={`mobile-${name}-${i}`}
                                    className="py-3 border-b border-surface-outline last:border-b-0"
                                    onClick={handleNavClick}
                                >
                                    <InfoBase>{name}</InfoBase>
                                </a>
                            )
                        })}
                        <div className="pt-4">
                            {/* Add onClick handler to mobile contact button */}
                            <div onClick={openContactModal}>
                                <RoundedButton>{headerContents.contactButton}</RoundedButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Render ContactModal */}
            <ContactModal 
                isOpen={isContactModalOpen} 
                onClose={closeContactModal} 
            />
        </>
    );
};

export default Nav;