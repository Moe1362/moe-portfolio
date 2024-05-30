import React, { useState } from 'react';
import github from '../assets/github.png';

const styles = {
    projectImage: {
        width: "300px",
        height: "200px",
        objectFit: "cover",
        margin: "25px"

    },
    h3: {
        display: "inline-block",
        margin: "25px",

    },
    img: {
        width: "25px",
        height: "25px",
        marginLeft: "12.5px",
        marginRight: "12.5px",
    },
    titleOverlay: {
        position: "absolute",
        top: "25px",
        left: "40px",
        width: "300px",
        height: "200px",
        background: "rgba(193, 211, 127, 0.7)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: "1.0",
        transition: "opacity 0.3s",
    },

};

function Project({ image, title, githubLink, technologies, summary }) {
    const [isHovered, setIsHovered] = React.useState(false);
    // Event handler for mouse enter
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    // Event handler for mouse leave
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div>

            <div style={styles.projectContainer}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <img style={styles.projectImage} src={image} alt={title}
                />
                {isHovered && (
                    <div style={styles.titleOverlay}>
                        <h3 style={styles.h3}>{title} </h3>
                        <br />
                        <a href={githubLink} target="_blank" rel="noreferrer">
                            <h3><span>  <img src={github} style={styles.img} /></span></h3>
                        </a>
                    </div>
                )}
                <p><strong>Used Technologies:</strong> {technologies} </p>
                <p><strong>Summary:</strong> {summary} </p>
            </div>


        </div >
    );
}


export default Project;
