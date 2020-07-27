import React from 'react';
import PropTypes from 'prop-types';

export default function Profilecomponent({data,children,handleName}) {
  
    return( 
        <div style= {{border:'black solid 1px', textAlign:'center', backgroundColor:'cyan', padding:'50px',width:'500px',margin:'60px 400px '  }}>
        <h1 >user :<span style={{color:'red'}}>{data.fullname} </span></h1>
        <h1>bio : <span style={{color:'red'}} >{data.bio}</span></h1>
        <h1>profession :<span style={{color:'red'}}>{data.profession}</span></h1>
        {children}
        {handleName(data)}
        </div>
      );
};

Profilecomponent.propTypes={
  data:PropTypes.objectOf(PropTypes.string),
  children:PropTypes.element,
  handleName:PropTypes.func};

  Profilecomponent.defaultProps =
{
    data : {Fullname:"quelqun",Bio:"....",Profession:"..."} 
    
}
