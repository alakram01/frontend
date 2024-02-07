import React from "react";
import './ImageLinkForm.css';


const ImageLinkForm =({onInputChange, onButtonSubmit}) =>{
return (
<div > 
<p className='f2 center fw9 '>
{'This Magic Brain will detect faces in the pictures. Just enter image url below!'}
 </p>
 <div className="center">
    <div className=" pa4  form center br3 shadow-5">
    <input className = 'f4 pa2 w-70 center bg-light-blue '  type ='tex'  onChange={onInputChange} />
    <button  className="w-30 grow f4 link ph3 pv2 dib bg-light-yellow fw9 type"  onClick = {onButtonSubmit}> Detect</button>
 </div>
 </div>
</div>

);
}
export default ImageLinkForm;