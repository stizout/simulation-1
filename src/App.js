// THIS DATABASE CAN BE FOUND AT HEROKU MASSIVE-TEST > IVORY
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import InsertPuppy from './insertPuppy';
import { Link } from 'react-router-dom';
import routes from './routes';


class App extends Component {
  constructor(props) {
    super(props);
    this.deletePuppy = this.deletePuppy.bind(this);
    this.state = {
      puppies: [],
    }
  }

  componentDidMount() {
    axios.get('/api/puppies').then(res => {
      this.setState({puppies: res.data});
    });
  };

  deletePuppy(id) {
    axios.delete(`/api/puppies/${id}`).then(res => {
      this.setState({puppies: res.data})
    })
  }

  render() {
    return (
      <div>
        <header>
          <Link to="/"><h1>Shelfie</h1></Link>
          <Link to="/puppies/showPuppies"><button>Dashboard</button></Link>
          <button>Add</button>
          {routes}
        </header>
        <div className="body-container">
          <div className="puppies-container">
            <Puppies
              puppies={this.state.puppies}
              deletePuppy={this.deletePuppy}
            />
          </div>
          <div className="insert-container">
            <div className="insert-info">
              <InsertPuppy />
            </div>
          </div>
        </div>
    
        
      </div>
    );
  }
}

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
            <button id="delete-button" onClick={() => props.deletePuppy(props.puppy.id)}>Delete</button>
            <button>Edit</button>
        </div>
          </div>
    </div>
  )
}

export default App;
