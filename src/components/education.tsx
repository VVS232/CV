import React, { ChangeEvent, useState } from 'react';
import styles from '../css/education.module.css';

interface inpOrPEl {
    p: JSX.Element;
    inp: JSX.Element;
    show: boolean;
}

const Education: React.FC = () => {
    const [vals, setVals] = useState<{ val: string }[]>([
        { val: 'Title of qualification awarded' },
        { val: 'Organization providing education and training' },
        { val: 'Starting date' },
        { val: 'Graduationg date' },
    ]);
    const [elements, setElements] = useState<inpOrPEl[]>([
        {
            p: <p onClick={showInp.bind(null, 0)}>{vals[0].val}</p>,
            inp: (
                <input
                    autoFocus
                    onBlur={showPar.bind(null, 0)}
                    type="text"
                    required
                    placeholder="Title of qualification awarded"
                    className={styles.qualification}
                    defaultValue={vals[0].val}
                    onChange={(e) => {
                        onInputChange(e, 0);
                    }}
                />
            ),
            show: true, //if true - show P
        },
        {
            p: <p onClick={showInp.bind(null, 1)}>{vals[1].val}</p>,
            inp: (
                <input
                    autoFocus
                    onBlur={showPar.bind(null, 1)}
                    type="text"
                    required
                    className={styles.organization}
                    placeholder="Organization providing education and training"
                    defaultValue={vals[1].val}
                    onChange={(e) => {
                        onInputChange(e, 1);
                    }}
                />
            ),
            show: true,
        },
        {
            p: <p onClick={showInp.bind(null, 2)}>{vals[2].val}</p>,
            inp: (
                <input
                    autoFocus
                    onBlur={showPar.bind(null, 2)}
                    type="date"
                    required
                    placeholder="From"
                    className={styles.edFrom}
                    defaultValue={vals[2].val}
                />
            ),
            show: true,
        },
        {
            p: <p onClick={showInp.bind(null, 3)}>{vals[3].val}</p>,
            inp: (
                <input
                    autoFocus
                    onBlur={showPar.bind(null, 3)}
                    type="date"
                    required
                    placeholder="To"
                    className={styles.edTo}
                    defaultValue={vals[3].val}
                />
            ),
            show: true,
        },
    ]);

    function showInp(num: number) {
        setElements((prev) => {
            const newElements = prev.slice();
            newElements[num].show = false;
            return newElements;
        });
    }

    function showPar(num: number) {
        setElements((prev) => {
            const newElements = prev.slice();
            newElements[num].show = true;

            return newElements;
        });
        console.log(vals[num].val);
    }
    function onInputChange(e: ChangeEvent<HTMLInputElement>, num: number) {
        setVals((prev) => {
            const newVals = prev.slice();
            newVals[num].val = (e.target as HTMLInputElement).value;
            return newVals;
        });
    }
    return (
        <section className={styles.education}>
            <h2>Education and trainings</h2>
            <div className={styles.educationInputs}>
                <div>
                    {elements[0].show ? elements[0].p : elements[0].inp}
                    {elements[1].show ? elements[1].p : elements[1].inp}
                </div>
                <div>
                    {elements[2].show ? elements[2].p : elements[2].inp}
                    {elements[3].show ? elements[3].p : elements[3].inp}
                    <label htmlFor={styles.ongoing}>Ongoing</label>{' '}
                    <input type="checkbox" id={styles.ongoing} />
                </div>
            </div>
            <button>Add Education</button>
        </section>
    );
};

export default Education;
