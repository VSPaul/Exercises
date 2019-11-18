import  React  from  'react';

const  DisplayEmployee = ({ employee }) => {
    return (
        <div  className="DisplayEmployee">
            <img  src={employee.picture.large}  alt=""  />
            <ul className="bullet">
                <li>Gender : {employee.gender}</li>
                <li>Name : {employee.name.title}  {employee.name.last}{' '}  {employee.name.first}</li>
                <li>E-mail : {employee.email}</li>
                <li>Location : {employee.location.street.name} {employee.location.street.number}
                            {employee.location.postcode}{' '} {employee.location.city}</li>
            </ul>
        </div>
    );
};

export  default  DisplayEmployee;
