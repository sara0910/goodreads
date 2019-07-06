import React from 'react';

import './BookList.css';

import Book from '../Book/Book';

export default class BookList extends React.Component {
    render() {
        return(
            <>
                <div className='booklist-container'>
                    <Book />
                </div>
            </>
        );
    }
}