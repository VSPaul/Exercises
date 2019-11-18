import  React  from  'react';

const  DisplaySimpson = ({ simpson }) => {
    return (
        <div  className="DisplaySimpsons">
            <img  src={simpson.image}  alt=""  />
            <ul className="bullet">
                <li>Character : {simpson.character}</li>
                <li>Quote : {simpson.quote}</li>
                
            </ul>
        </div>
    );
};

export  default  DisplaySimpson;
