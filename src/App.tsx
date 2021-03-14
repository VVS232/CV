import React, { ReactElement } from 'react';
import './App.css';
import Header from './components/header';
import PersonalInfo from './components/personalInfo';
import Education from './components/education';
import Work from './components/work';
function App(): ReactElement {
    return (
        <div className="App">
            <Header />
            <main>
                <PersonalInfo />
                <Education />
                <Work />
            </main>
        </div>
    );
}

export default App;
