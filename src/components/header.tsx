import React from 'react';
import styles from './header.module.css';

const Header: React.FC = () => {
    return (
        <header>
            <h2 className={styles.title}>CV application</h2>
        </header>
    );
};

export default Header;
