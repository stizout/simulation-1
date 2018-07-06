// THIS DATABASE CAN BE FOUND AT HEROKU MASSIVE-TEST > IVORY
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class ShowPuppies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      puppies: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4500/puppies/showPuppies').then(res => {
      this.setState({puppies: res.data});
    });
  };

  render() {
    return (
      <div>
        {/* <header>
          <h1>Shelfie</h1>
        </header> */}
        <div className="body-container">
          <div className="puppies-container">
            <Puppies
              puppies={this.state.puppies}
            />
          </div>
        </div>
    
        
      </div>
    );
  }
}

const Puppies = (props) => {
  return (
    <div>
      {props.puppies.map((puppy, i) => {
        return (
          <Puppy
          key={puppy.id}
          puppy={puppy}
        />
        )

      })}
      
    </div>
  )
}

const Puppy = (props) => {
  return (
    <div>
        <div className="puppy-container">
          <div className="puppy-image">
            <img src={props.puppy.image}/>
          </div>
          <div className="puppy-info">
            <h3>{props.puppy.product}</h3>
            <h3>${props.puppy.price}</h3>
            <button id="delete-button">Delete</button>
            <button>Edit</button>
        </div>
          </div>
    </div>
  )
}

export default ShowPuppies;