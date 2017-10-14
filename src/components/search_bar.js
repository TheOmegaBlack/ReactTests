import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            term: ''
        }
    }
    handleinput = (event) => {
        this.setState({ term: event.target.value })
    }
    render(){
        return (
        <div>
            <input onChange={this.handleinput} />
            Value of the input: {this.state.term}
        </div>
        )
    }
};

export default SearchBar;
