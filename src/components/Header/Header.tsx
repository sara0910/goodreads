import React from 'react';

// components
import Search from '../Search';

// styles
import './Header.css';

const Header: React.FC = () => {
    return(
        <div className='header-container'>
            <div className='h-title'>GoodReads</div>
            <div>
                <Search />
            </div>
        </div>
    )
}
export default Header;