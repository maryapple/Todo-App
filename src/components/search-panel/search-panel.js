import React, { Component } from 'react'
import './search-panel.css'

export default class SearchPanel extends Component {

    state = {
        term: ''
    }

    onSearchChange = (e) => {
        const term = e.target.value
        this.setState({ term })
        this.props.onSearchChange(term)
    }
    render () {
        return (
            <div id="search">
                <input 
                    className="form-control search-input" 
                    type="text" 
                    placeholder="Search"
                    value={this.state.term}
                    onChange={this.onSearchChange}
                     />
            </div>
        )
    }
}