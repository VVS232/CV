import React, { ChangeEvent, ReactElement } from 'react';
import styles from '../css/personalInfo.module.css';

class PersInfo extends React.Component<
    unknown,
    { els: { val: string; show: boolean }[] }
> {
    els: { val: string; show: boolean }[];
    constructor(props: unknown) {
        super(props);
        this.els = [];
        this.els = [
            { val: 'First Name', show: true }, //if true - show P
            {
                val: 'Last Name',
                show: true,
            },
            { val: 'Email', show: true },
            { val: 'Phone Number', show: true },
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
            console.log(newState.els[num].val);

            return newState;
        });
    };
    onInputChange = (e: ChangeEvent<HTMLInputElement>, num: number): void => {
        this.setState((prevState) => {
            const newState = { ...prevState };
            newState.els[num].val = (e.target as HTMLInputElement).value;
            console.log(newState.els[num].val);
            return newState;
        });
    };

    render(): ReactElement {
        return (
            <section className={styles.persInfo}>
                <h2>Personal Info</h2>
                <div className={styles.persInputs}>
                    <div>
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
                                    className={styles.persInfoInput}
                                    type="text"
                                    maxLength={20}
                                    placeholder="First Name"
                                    required
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
                                    className={styles.persInfoInput}
                                    type="text"
                                    maxLength={20}
                                    placeholder="Last Name"
                                    required
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
                                    type="email"
                                    placeholder="Email"
                                    required
                                    className={styles.persInfoInput}
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
                                    className={styles.persInfoInput}
                                    type="tel"
                                    placeholder="Phone Number"
                                    pattern="[0-9]"
                                    required
                                    autoFocus
                                    onBlur={this.showPar.bind(null, 3)}
                                    value={this.state.els[3].val}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PersInfo;
