// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div class="header">
            <h1>Call a Friend</h1>
            <h5>Your friendly contact app</h5>
            <span class='line-dot'>..............................</span>
        </div>
    )
}

export default Header;