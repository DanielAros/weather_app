import React from "react";
import styles from './InputSearch.module.css';
import iconSearch from "../../assets/iconSearch.png"

const InputSearch = () => {
    return(
        <div className={styles.containerInput}>
            <input type='text' placeholder="Buscar ciudad" className={styles.search}/>
            <div className={styles.containerImgSearchIcon}>
                <img src={iconSearch} className={styles.imgIconSearch}/>
            </div>
        </div>
    )
}

export default InputSearch;