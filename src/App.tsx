import React from 'react';

//components
import Header from './components/Header';
import BookList from './components/BookList';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <BookList />
    </div>
  );
}

export default App;
