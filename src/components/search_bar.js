import React, { Component } from 'react';

// functionnal components don't have state, only class basic components do
// functionnal component
/*
const SearchBar = () => {
  return <input/>
};
*/
class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: ''};
    }

    render() {
        // return <input onChange={this.onInputChange} />;
        // equivalent ES6 one line only
        // return <input onChange={e => console.log(e.target.value)} />;


        // display txt when event is triggered on the DOM (put in the div)
        // Value of the input: {this.state.term}

        /* if we delete onChange event, we can't put text on this input type because we initialise the value with a state, to update this value we
        need to update state */

        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    /* convention event handler
    on | typeInput | event Name */
    /*
    onInputChange(e) {
        console.log(e.target.value);
    }
    */
}

export default SearchBar;