import React from 'react';

interface ButtonProps{
    onClick:any;
    value: string;

}

const Button:React.FC<ButtonProps>= ({onClick, value})=>{
    return(
        <div className="btn">
            <button onClick={onClick}>
                {value}
            </button>
        </div>
    )
}

export default Button;