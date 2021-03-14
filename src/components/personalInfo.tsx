import React from 'react';
import styles from '../css/personalInfo.module.css';

const PersInfo: React.FC = () => {
    return (
        <section className={styles.persInfo}>
            <h2>Personal Info</h2>
            <div className={styles.persInputs}>
                <div>
                    <input
                        className={styles.persInfoInput}
                        type="text"
                        maxLength={20}
                        placeholder="First Name"
                        required
                    />
                    <input
                        className={styles.persInfoInput}
                        type="text"
                        maxLength={20}
                        placeholder="Last Name"
                        required
                    />
                </div>

                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        className={styles.persInfoInput}
                    />
                    <input
                        className={styles.persInfoInput}
                        type="tel"
                        placeholder="Phone Number"
                        pattern="[0-9]"
                        required
                    />
                </div>
            </div>
        </section>
    );
};

export default PersInfo;
