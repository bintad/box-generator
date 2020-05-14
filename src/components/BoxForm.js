import React, {useState} from 'react';

const BoxForm = ({boxes, setBoxes}) => {
    
    const [color, setColors] = useState("");
    const [height, setHeight] = useState("140");

    const colorHandler =  (e) => {
        setColors(e.target.value);
    }
    const heightHandler =  (e) => {
        setHeight(e.target.value);
    }

    const forumHandler = (e) =>{
        e.preventDefault();
        setBoxes([...boxes, {
            color:color, height:height, style:{display:"inline-block", 
            border:"2px solid" + color, height: +"px"}
        }

        ]);
        console.log(boxes)
        console.log(color);
        console.log(height);

    }
    return(
        <div>
            <form onSubmit={forumHandler}>
             <input type='text' value={color} placeholder="color me!" onChange={colorHandler}/>
             <input type='text' value={height} placeholder="height please!" onChange={heightHandler}/> 
             <input type='submit'value='add box!'/>  
            </form>
        </div>
    )
}

export default BoxForm;