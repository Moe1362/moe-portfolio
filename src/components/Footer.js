import React from 'react';
import github from '../assets/github.png';
import linkedin from '../assets/linkedIn.png';

const styles = {
    footer: {
        background: '#0061ff',
        bottom: '0',
        left: '0',
        width: '100%',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
    },
    image: {
        width: '50px',
        height: '50px',
        margin: '0 10px',
        transition: 'transform 0.3s',
    },
    imageHover: {
        transform: 'scale(1.2)',
        boxShadow: '#0061ff',
        
    },
  
  
};

const images = [
    { name: 'GitHub', path: github, url: 'https://github.com/Moe1362' },
    { name: 'LinkedIn', path: linkedin, url: 'https://www.linkedin.com/in/mxabbasi/' },
   
];

export default function Footer() {
    const handleImageHover = (e) => {
        // Event handler for image hover
        e.target.style.transform = 'scale(1.2)';
    };

    const handleImageHoverEnd = (e) => {
        // Event handler for ending image hover
        e.target.style.transform = 'scale(1)';
    };
    return (
        <div style={styles.footer}>
            <ul style={styles.linksUl}>
                {images.map((image, index) => (
                    <li key={index} className="d-inline">
                        <a href={image.url} className="text-white" target='_blank' rel="noopener noreferrer" >
                            <img
                                src={image.path}
                                alt={image.name}
                                className="img-fluid"
                                style={styles.image}
                                onMouseEnter={handleImageHover}
                                onMouseLeave={handleImageHoverEnd}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
