import React from 'react';
import './footer.css';

function Footer() {
    
    return (
        <footer className="footer">
            <p style={{backgroundColor: "black", color: 'white'}}>©PhotoAlbum</p>
            <p style={{backgroundColor: "black", color: 'white'}}><span>Creating with ❤️ by <a href="https://github.com/jojoford/" target="_blank" rel="noopener noreferrer">jojoford</a> | <a href="https://github.com/symlara"  target="_blank" rel="noopener noreferrer">symlara</a> | <a href="/" target="_blank" rel="noopener noreferrer">istephenson</a></span></p>
        </footer>
    )
};

export default Footer;