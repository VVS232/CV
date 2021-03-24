import React, { ChangeEvent } from 'react';
import styles from '../css/education.module.css';

class Education extends React.Component<
    unknown,
    { els: { val: string; show: boolean; ongoing?: boolean }[] }
> {
    els: { val: string; show: boolean; ongoing?: boolean }[];
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
            { val: 'Graduationg date', show: true, ongoing: false },
        ];
        this.state = { els: this.els };
    }

    showInp = (num: number): void => {
        this.setState((prevState) => {
            const newState = { ...prevState };
            newState.els[num].show = false;

            return newState;
        });
    };

    showPar = (num: number): void => {
        this.setState((prevState) => {
            const newState = { ...prevState };
            newState.els[num].show = true;

            return newState;
        });
    };
    onInputChange = (e: ChangeEvent<HTMLInputElement>, num: number): void => {
        this.setState((prevState) => {
            const newState = { ...prevState };
            newState.els[num].val = (e.target as HTMLInputElement).value;
            return newState;
        });
    };

    onOngoingChange = (e: ChangeEvent<HTMLInputElement>): void => {
        this.setState((prevState) => {
            const newState = { ...prevState };
            newState.els[3].ongoing = (e.target as HTMLInputElement).checked;
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
                                className={styles.qualification}
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
                            <p
                                className={styles.organization}
                                onClick={this.showInp.bind(null, 1)}>
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
                            <p
                                className={styles.edFrom}
                                onClick={this.showInp.bind(null, 2)}>
                                {this.state.els[2].val}
                            </p>
                        ) : (
                            <input
                                onChange={(e) => {
                                    this.onInputChange(e, 2);
                                }}
                                autoFocus
                                onBlur={this.showPar.bind(null, 2)}
                                type="date"
                                required
                                placeholder="From"
                                className={styles.edFrom}
                                value={this.state.els[2].val}
                            />
                        )}
                        {!this.state.els[3].ongoing ? (
                            this.state.els[3].show ? (
                                <p
                                    className={styles.edTo}
                                    onClick={this.showInp.bind(null, 3)}>
                                    {this.state.els[3].val}
                                </p>
                            ) : (
                                <input
                                    onChange={(e) => {
                                        this.onInputChange(e, 3);
                                    }}
                                    autoFocus
                                    onBlur={this.showPar.bind(null, 3)}
                                    type="date"
                                    required
                                    placeholder="To"
                                    className={styles.edTo}
                                    value={this.state.els[3].val}
                                />
                            )
                        ) : null}
                        <label htmlFor={styles.ongoing}>Ongoing</label>{' '}
                        <input
                            type="checkbox"
                            id={styles.ongoing}
                            onChange={this.onOngoingChange}
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default Education;
