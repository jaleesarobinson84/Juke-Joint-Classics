// client/components/Picture/Picture.js
import React from 'react';
import ReactLogo from '../../assets/react.svg'; // Import the react.svg file

const Picture = () => {
    return (
        <div>
            <h2>Pictures Section</h2>
            <img src={ReactLogo} alt="React Logo" /> {/* Use the imported ReactLogo */}
            <p>Add your picture content here...</p>
        </div>
    );
};

export default Picture;
