import React, { ReactElement, useState } from 'react';
import './App.css';
import Header from './components/header';
import PersonalInfo from './components/personalInfo';
import Education from './components/ed';
import Work from './components/work';

type state = {
    Educations: typeof Education[];
    Works: typeof Work[];
};

function App(): ReactElement {
    const [forms, setForms] = useState<state>({
        Educations: [Education],
        Works: [Work],
    });
    function AddForm(formPart: keyof state) {
        setForms((prevState) => {
            const newState = Object.assign({}, prevState);
            newState[formPart].push(Education);
            return newState;
        });
    }

    return (
        <div className="App">
            <Header />
            <main>
                <PersonalInfo />
                {forms.Educations.map((el, index) => (
                    <Education key={index} />
                ))}
                <button
                    onClick={() => {
                        AddForm('Educations');
                    }}>
                    Add Education
                </button>
                {forms.Works.map((el, index) => (
                    <Work key={index} />
                ))}
                <button
                    onClick={() => {
                        AddForm('Works');
                    }}>
                    Add Work
                </button>
            </main>
        </div>
    );
}

export default App;
