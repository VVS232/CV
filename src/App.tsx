import React, { ReactElement } from 'react';
import './App.css';
import Header from './components/header';
function App(): ReactElement {
    return (
        <div className="App">
            <Header />
        </div>
    );
}

export default App;
