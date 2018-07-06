import React, { Component } from 'react';
import Puppy from './App';
 
 const Puppies = (props) => {
    return (
      <div>
        {props.puppies.map((puppy) => {
          return (
            <Puppy
            key={puppy.id}
            puppy={puppy}
            deletePuppy={props.deletePuppy}
          />
          )
  
        })}
        
      </div>
    )
  }
  export default Puppies