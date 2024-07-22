import React from 'react';

const Footer: React.FC = () => {
    const openNewPage = (url: string): void => {
        window.open(url, '_blank');
    };

    return (
        <footer className="footer hidden fade-in-footer">
            <div className="toolbar">
                <button className="icon-button" style={{ backgroundImage: "url('/images/Group 4548.svg')" }} onClick={() => openNewPage('https://example.com/page1')}></button>
                <button className="icon-button" style={{ backgroundImage: "url('/images/Vector (3).svg')" }} onClick={() => openNewPage('https://example.com/page2')}></button>
                <button className="icon-button" style={{ backgroundImage: "url('/images/Group 427318962.svg')" }} onClick={() => openNewPage('https://example.com/page6')}></button>
          
            </div>
        </footer>
    );
};

export default Footer;
