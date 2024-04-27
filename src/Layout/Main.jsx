import { useState, useEffect, useLayoutEffect } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import './style.css';

const Main = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    const location = useLocation();

    // Effect to handle navbar visibility on scroll
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = prevScrollPos > currentScrollPos;
            setPrevScrollPos(currentScrollPos);
            setVisible(isVisible);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    // Effect to scroll to top when navigating to a new page
    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });
    }, [location.pathname]);

    return (
        <div className="backimage max-w-screen-2xl">
            <div className={`sticky top-0 pb-2 bg-[#192a56] transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
                <Navbar />
            </div>
            <Outlet />
        </div>
    );
};

export default Main;
