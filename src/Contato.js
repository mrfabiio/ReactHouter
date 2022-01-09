import React from 'react';
import styles from './Contato.module.css'
import Head from './Head';
import foto from './img/contato.jpg';


const Contato = () => {
    return (
        <section className={`${styles.contato} animeLeft`}>
            <Head title="Ranek | Contato" description="Entre em contato" />
            <img src={foto} alt="" />
            <div>
                <h1>Entre em contato</h1>
                <ul className={styles.dados}>
                    <li>fabio@gmail.com</li>
                    <li>219927632999</li>
                    <li>Rua Patricia cristina, 179</li>
                </ul>
            </div>
        </section>
    )
}

export default Contato
