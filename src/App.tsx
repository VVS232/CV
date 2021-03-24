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
    function AddForm(formPart: keyof state, formEl:typeof Education|typeof Work ) {
        setForms((prevState) => {
            const newState = Object.assign({}, prevState);
              newState[formPart]= [...newState[formPart],formEl]
          return newState
        });
    }
    function deleteForm(formPart:keyof state) {
        setForms((prevState) => {
            const newState = Object.assign({}, prevState);
             newState[formPart] =  newState[formPart].filter((el,i)=>{
                return i!=newState[formPart].length-1

            })    
            console.log(prevState)
            return newState       
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
                        AddForm('Educations', Education);
                    }}>
                    Add Education
                </button>
                <button onClick={()=>deleteForm("Educations")}>Delete</button>
                {forms.Works.map((el, index) => (
                    <Work key={index} />
                ))}
                <button
                    onClick={() => {
                        AddForm('Works', Work);
                    }}>
                    Add Work
                </button>
                <br/>
                <button className="print" onClick={window.print}>Print</button>
            </main>
        </div>
    );
}

export default App;
