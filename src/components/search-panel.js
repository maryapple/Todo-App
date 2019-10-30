import React from 'react'
import './search-panel.css'

const SearchPanel = () => {
    /* const searchText = 'search'
    const searchStyle = {
        fontSize: '20px'
    }
    return <input
        style={searchStyle}
        placeholder={searchText} /> */

    return (
        <div id="search">
            <input className="form-control search-input" type="text" placeholder="Search" />
        </div>
    )
}

export default SearchPanel