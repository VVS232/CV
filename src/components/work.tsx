import React from 'react';
import styles from '../css/work.module.css';

const Work: React.FC = () => {
    return (
        <section>
            <h2>Work Experience</h2>
            <div className="workInputs">
                <div>
                    <input
                        type="text"
                        required
                        placeholder="Title of the ocupation"
                        className={styles.title}
                    />
                    <input
                        type="text"
                        required
                        className={styles.employer}
                        placeholder="Employer"
                    />
                </div>
                <div>
                    <input
                        type="date"
                        required
                        placeholder="From"
                        className={styles.wFrom}
                    />
                    <input
                        type="date"
                        required
                        placeholder="To"
                        className={styles.wTo}
                    />
                    <label htmlFor={styles.ongoing}>Ongoing</label>{' '}
                    <input type="checkbox" id={styles.ongoing} />
                </div>
            </div>
            <button>Add work</button>
        </section>
    );
};

export default Work;
