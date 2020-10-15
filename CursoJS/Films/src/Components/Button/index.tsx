import React from 'react';

interface ButtonProps{
    value: string;

}

const Button:React.FC<ButtonProps>= ({value})=>{
    return(
        <div >
            <button 
            className="button" type="submit"  value={value} />
        </div>
    )
}


export default Button;