import React from 'react';
import styles from '../css/education.module.css';

const Education: React.FC = () => {
    return (
        <section className={styles.education}>
            <h2>Education and trainings</h2>
            <div className={styles.educationInputs}>
                <div>
                    <input
                        type="text"
                        required
                        placeholder="Title of qualification awarded"
                        className={styles.qualification}
                    />
                    <input
                        type="text"
                        required
                        className={styles.organization}
                        placeholder="Organization providing education and training"
                    />
                </div>
                <div>
                    <input
                        type="date"
                        required
                        placeholder="From"
                        className={styles.edFrom}
                    />
                    <input
                        type="date"
                        required
                        placeholder="To"
                        className={styles.edTo}
                    />
                    <label htmlFor={styles.ongoing}>Ongoing</label>{' '}
                    <input type="checkbox" id={styles.ongoing} />
                </div>
            </div>
            <button>Add Education</button>
        </section>
    );
};

export default Education;
