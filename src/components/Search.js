import React from 'react';
import { useAppContext } from '../../context/appContext';
import styles from "../layout/Styles.module.css";

const Search = () => {
    return (
        <div className={styles.Search}>
            <input type="search"></input>
        </div>
    )
}

export default Search;