import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class InsertPuppy extends Component {
    constructor() {
        super();
        this.state = {
            imagePreview: '',
            productName: '',
            price: '',
            image: '',
        };
    }
    updateInput(key, userInput) {
        this.setState({
            [key]: userInput
        })
    }
    
    handleAddPuppy() {
        axios.post('/api/puppies', this.state).then(res => {
            this.setState({
                productName: '',
                price: '',
                image: '',
            })
        })
    }
    
    
    
    
    
    render() {
        return (
            <div>
                <div >
                    <img className="imagePreview" src={this.state.image}/>
                </div>
                <div>
                    <p>Product:</p>
                    <input onChange={(e) => this.updateInput('productName', e.target.value)} className="input"/>
                    <p>Price:</p>
                    <input onChange={(e) => this.updateInput('price', e.target.value)} className="input"/>
                    <p>Image:</p>
                    <input onChange={(e) => this.updateInput('image', e.target.value)} className="input"/>
                    <div>
                        <button onClick={() => this.handleAddPuppy()}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }



}

export default InsertPuppy