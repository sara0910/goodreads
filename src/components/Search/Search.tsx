import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
    render() {
        return(
            <>
                <div className="search-container">
                    <input type="text" placeholder="Search books here" />
                    <button className="search-button">Search</button>
                </div>
            </>
        );
    }
}
