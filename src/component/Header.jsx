import React from 'react';
import Navbar from './utilities/Navbar';
import HeaderSection from './HeaderSection';

const Header = () => {
    return (
        <div className='header h-screen'>
            <Navbar />
            <HeaderSection />
        </div>
    );
}

export default Header;
