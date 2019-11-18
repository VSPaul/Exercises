import  React  from  'react';

const  GenerateEmployee = ({ selectEmployee }) => {
    return (
        <div  className="GenerateEmployee">
            <button className='btn' onClick={selectEmployee}>Get employee</button>
        </div>
    );
};



export  default  GenerateEmployee;
