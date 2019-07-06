import React from 'react';

class Book extends React.Component {
    render() {
        return(
            <div>
                <div className='book-items'>
                    <img src='https://images.gr-assets.com/books/1363452191s/13326831.jpg'/>
                    <div className='book-title'>test</div>
                </div>
            </div>
        );
    }
}

export default Book;