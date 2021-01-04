import React from 'react';
import './input.scss';

function Input({ place }) {
    return (
        <div className="Input">
            <input
                type="text"
                className="Input__text"
                name="email" id="email"
                placeholder={place}
            />
        </div>
    );
}

export default Input;