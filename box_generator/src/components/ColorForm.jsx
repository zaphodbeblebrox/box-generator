import React, { useState } from "react";

const ColorForm = ({boxes, setBoxes}) => {
    const [color, setColor] = useState("");
    
    const createBox = (event) => {
        event.preventDefault();
        const addBox = [...boxes, color]
        setBoxes(addBox);
        setColor("")
    }

    return(
        <form onSubmit={createBox}>
            <label htmlFor="color">Color</label>
            <input type="text" name="color" id="color" 
                value={color} 
                onChange={event => setColor(event.target.value)}/>
            <button>Add</button>
        </form>
    );
}

export default ColorForm;