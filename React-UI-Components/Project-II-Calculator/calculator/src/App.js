import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="calc-container">
     <CalculatorDisplay />

     <div className="number-btn">
             <div className="row">
                <ActionButton text="blah" level="two" row="boat" />
            </div>

             <div className="row">
                <ActionButton buttonStyle="blah two" text="7"/>
                <ActionButton className="eight" row="8"/>8
                <ActionButton className="nine" />9
                <ActionButton className="mult" />x
            </div>

            <div className="row">
                <ActionButton className="four" />4
                <ActionButton className="five" />5
                <ActionButton className="six" />6
                <ActionButton className="sub" />-
            </div>

             <div className="row">
                <ActionButton className="one" />1
                <ActionButton className="two" />2
                <ActionButton className="three" />3
                <ActionButton className="add" />+
            </div>

             <div className="row">
                <ActionButton className="zero" />0
                <ActionButton className="equals" />=
             </div> 
        </div>

      <div className="row">
        <ActionButton />
      </div>
    </div>
  );
};

export default App;


