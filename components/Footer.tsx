import React from 'react';

const Footer: React.FC = () => {
    const openNewPage = (url: string): void => {
        window.open(url, '_blank');
    };

    return (
        <footer className="footer hidden fade-in-footer">
            <div className="toolbar">
               
          
            </div>
        </footer>
    );
};

export default Footer;
