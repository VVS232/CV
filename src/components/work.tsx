import React, { ChangeEvent, ReactElement } from 'react';
import styles from '../css/work.module.css';

class Work extends React.Component<
    unknown,
    { els: { val: string; show: boolean }[] }
> {
    els: { val: string; show: boolean }[];
    constructor(props: unknown) {
        super(props);
        this.els = [];
        this.els = [
            { val: 'Title of the ocupation', show: true },
            {
                val: 'Employer',
                show: true,
            },
            { val: 'From', show: true },
            { val: 'To', show: true },
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

    render(): ReactElement {
        return (
            <section>
                <h2>Work Experience</h2>
                <div className="workInputs">
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
                                type="text"
                                required
                                placeholder="Title of the ocupation"
                                className={styles.title}
                                autoFocus
                                onBlur={() => {
                                    this.showPar(0);
                                }}
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
                                type="text"
                                required
                                className={styles.employer}
                                placeholder="Employer"
                                autoFocus
                                onBlur={this.showPar.bind(null, 1)}
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
                                type="date"
                                required
                                placeholder="From"
                                className={styles.wFrom}
                                autoFocus
                                onBlur={this.showPar.bind(null, 2)}
                                value={this.state.els[2].val}
                            />
                        )}
                        {this.state.els[3].show ? (
                            <p onClick={this.showInp.bind(null, 3)}>
                                {this.state.els[3].val}
                            </p>
                        ) : (
                            <input
                                type="date"
                                required
                                placeholder="To"
                                className={styles.wTo}
                                autoFocus
                                onBlur={this.showPar.bind(null, 3)}
                                value={this.state.els[3].val}
                            />
                        )}
                        <label htmlFor={styles.ongoing}>Ongoing</label>{' '}
                        <input type="checkbox" id={styles.ongoing} />
                    </div>
                </div>
                <button>Add work</button>
            </section>
        );
    }
}
export default Work;
