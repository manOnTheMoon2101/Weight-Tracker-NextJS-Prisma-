'use client'

import styles from './navbar.module.css'


export default function Navbar(){

    return(

        <div className={styles.navDiv}>
        <ul>
            <li>Home</li>
            <li>Graphs</li>
            <li>Calculators</li>
        </ul>
        
        </div>
     
    )
}