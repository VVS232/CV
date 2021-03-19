import React, { ChangeEvent } from 'react';
import styles from '../css/education.module.css';

class Education extends React.Component<
    unknown,
    { els: { val: string; show: boolean }[] }
> {
    els: { val: string; show: boolean }[];
    constructor(props: unknown) {
        super(props);
        this.els = [];
        this.els = [
            { val: 'Title of qualification awarded', show: true },
            {
                val: 'Organization providing education and training',
                show: true,
            },
            { val: 'Starting date', show: true },
            { val: 'Graduationg date', show: true },
        ];
        this.state = { els: this.els };
    }

    showInp = (num: number) => {
        this.setState((prevState) => {
            const newState = { ...prevState };
            newState.els[num].show = false;

            return newState;
        });
    };

    showPar = (num: number) => {
        this.setState((prevState) => {
            const newState = { ...prevState };
            newState.els[num].show = true;
            console.log(newState.els[num].val);

            return newState;
        });
    };
    onInputChange = (e: ChangeEvent<HTMLInputElement>, num: number) => {
        this.setState((prevState) => {
            const newState = { ...prevState };
            newState.els[num].val = (e.target as HTMLInputElement).value;
            console.log(newState.els[num].val);
            return newState;
        });
    };

    render(): JSX.Element {
        return (
            <section className={styles.education}>
                <h2>Education and trainings</h2>
                <div className={styles.educationInputs}>
                    <div>
                        {this.state.els[0].show ? (
                            <p
                                onClick={() => {
                                    this.showInp(0);
                                }}>
                                {this.state.els[0].val}
                            </p>
                        ) : (
                            <input
                                autoFocus
                                onBlur={() => {
                                    this.showPar(0);
                                }}
                                type="text"
                                required
                                placeholder="Title of qualification awarded"
                                className={styles.qualification}
                                onChange={(e) => {
                                    this.onInputChange(e, 0);
                                }}
                                value={this.state.els[0].val}
                            />
                        )}

                        {this.state.els[1].show ? (
                            <p onClick={this.showInp.bind(null, 1)}>
                                {this.state.els[1].val}
                            </p>
                        ) : (
                            <input
                                autoFocus
                                onBlur={this.showPar.bind(null, 1)}
                                type="text"
                                required
                                className={styles.organization}
                                placeholder="Organization providing education and training"
                                value={this.state.els[1].val}
                                onChange={(e) => {
                                    this.onInputChange(e, 1);
                                }}
                            />
                        )}
                    </div>
                    <div>
                        {this.state.els[2].show ? (
                            <p onClick={this.showInp.bind(null, 2)}>
                                {this.state.els[2].val}
                            </p>
                        ) : (
                            <input
                                autoFocus
                                onBlur={this.showPar.bind(null, 2)}
                                type="date"
                                required
                                placeholder="From"
                                className={styles.edFrom}
                                value={this.state.els[2].val}
                            />
                        )}
                        {this.state.els[3].show ? (
                            <p onClick={this.showInp.bind(null, 3)}>
                                {this.state.els[3].val}
                            </p>
                        ) : (
                            <input
                                autoFocus
                                onBlur={this.showPar.bind(null, 3)}
                                type="date"
                                required
                                placeholder="To"
                                className={styles.edTo}
                                value={this.state.els[3].val}
                            />
                        )}
                        <label htmlFor={styles.ongoing}>Ongoing</label>{' '}
                        <input type="checkbox" id={styles.ongoing} />
                    </div>
                </div>
                <button>Add Education</button>
            </section>
        );
    }
}

export default Education;
