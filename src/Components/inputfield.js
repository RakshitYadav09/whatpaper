import React, { useState } from 'react';
import './InputField.css';

const InputField = ({ label, type, placeholder }) => {
    const [color, setColor] = useState('#ffffff');

    const handleColorChange = (e) => {
        if (type === 'color') {
            setColor(e.target.value);
        }
    };

    return (
        <div className="input-box">
            <label className="input-label">{label}</label>
            {type === 'color' ? (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                        type="color"
                        value={color}
                        onChange={handleColorChange}
                        className="input-field"
                    />
                    <div
                        className="color-preview"
                        style={{ backgroundColor: color }}
                    ></div>
                </div>
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    className="input-field"
                />
            )}
        </div>
    );
};

export default InputField;
