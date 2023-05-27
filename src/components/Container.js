import React, { useState } from 'react';
import Nav from './Nav';
import Home from './pages/Home';
import Contact from './pages/Contact';

export default function Container() {
    const [currentPage, setCurrentPage] = useState('Home');

    // Returns the page depending on what the current value of 'currentPage' is
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Projects') {
            
        };
    };

        const handlePageChange = (page) => setCurrentPage(page);

        return (
            <div>
                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
            </div>
        );
}