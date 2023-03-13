import React, { Component } from 'react';
import './ColorPicker.css'

const ColorPicker = ({ options }) => {
    <div className="ColorPicker">
        <h2 className="ColorPicker__tittle">Color Picker</h2>
        <div>
            {options.map(({ label, color }) => (
                <span
                    key={label}
                    className="ColorPicker__options"
                    style={{ backgroundColor: color }}
                ></span>
            ))}
        </div>
    </div>
};

export default ColorPicker;