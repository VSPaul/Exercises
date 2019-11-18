import  React  from  'react';

const  GenerateSimpson = ({ selectSimpson }) => {
    return (
        <div  className="GenerateSimpson">
            <button className='btn' onClick={selectSimpson}>New Quote</button>
        </div>
    );
};



export  default  GenerateSimpson;
