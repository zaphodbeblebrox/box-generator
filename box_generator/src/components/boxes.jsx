import React from "react";
import './boxes.css';

const Boxes = ({boxes}) => {


    return(
        <div className="boxes-container">
            {boxes.map((box, idx) => {
                return(
                    <div className="box" 
                        style={{backgroundColor: box.color, width: box.size, height: box.size}} 
                        key={idx}></div>
                );
            })}
        </div>
    );
}

export default Boxes;