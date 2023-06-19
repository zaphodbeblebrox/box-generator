import React, { useState } from "react";

const ColorForm = ({boxes, setBoxes}) => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState(100);
    
    const createBox = (event) => {
        event.preventDefault();
        const addBox = [...boxes, {color, size: size.toString()+"px"}]
        setBoxes(addBox);
        setColor("")
    }

    return(
        <form onSubmit={createBox}>
            <div>
                <label htmlFor="color">Color</label>
                <input type="text" name="color" id="color" 
                    value={color} 
                    onChange={event => setColor(event.target.value)}/>
                <button>Add</button>
            </div>
            <div>
                <label htmlFor="size">Size</label>
                <input type="number" name="size" id="size" 
                    value={size} 
                    onChange={event => setSize(event.target.value)}/>
                <button>Add</button>
            </div>
        </form>
    );
}

export default ColorForm;