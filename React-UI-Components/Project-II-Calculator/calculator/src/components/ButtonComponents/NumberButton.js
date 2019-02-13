import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <div className="number-btn">
             <div className="row">
                <NumberButton className="division">/</NumberButton>
            </div>

             <div className="row">
                <NumberButton className="seven">7</NumberButton>
                <NumberButton className="eight">8</NumberButton>
                <NumberButton className="nine">9</NumberButton>
                <NumberButton className="mult">x</NumberButton>
            </div>

            <div className="row">
                <NumberButton className="four">4</NumberButton>
                <NumberButton className="five">5</NumberButton>
                <NumberButton className="six">6</NumberButton>
                <NumberButton className="sub">-</NumberButton>
            </div>

             <div className="row">
                <NumberButton className="one">1</NumberButton>
                <NumberButton className="two">2</NumberButton>
                <NumberButton className="three">3</NumberButton>
                <NumberButton className="add">+</NumberButton>
            </div>

             <div className="row">
                <NumberButton className="zero">0</NumberButton>
                <NumberButton className="equals">=</NumberButton>
             </div>
        </div>
    );
};

export default NumberButton;
