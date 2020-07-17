import React from 'react';
import logo from './logo.svg';
import './App.css';

class Recipe extends React.Component {
  render() {
    return <div>"hello"</div>;
  }
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <body>
        <Recipe />
      </body>
    </div>
  );
}

export default App;
