import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Head from './Head'
import styles from './Produto.module.css'


const Produto = () => {
    const [produto, setProduto] = React.useState(null)
    const [loading, setLoanding] = React.useState(false)
    const [error, setError] = React.useState(null)

    const { id } = useParams()
    

    React.useEffect(() => {
        async function fetchProduto(url) {
            try {
                setLoanding(true)
                const response = await fetch(url)
                const json = await response.json()
                setProduto(json)
            }   catch (erro) {
                setError('Um erro ocorreu')
            }   finally {
                setLoanding(false)
            }
        }
        fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
    },[id])

    if(loading) return <div className="loading">Carregando...</div>
    if(error) return <p>{error}</p>
    if(produto === null) return null
    return (
        <section className={styles.produto}>
            <Head 
                title={`Ranek | ${produto.nome}`} 
                description={`Ranek | Esse é um produto: ${produto.nome}`} 
            />
           <div>
                {produto.fotos.map((foto) => (
                    <img key={foto.src} src={foto.src} alt="" />
            ))}
           </div>
            <div>
                <h1>Produto</h1>
                    <span className={styles.preco}>R${produto.preco}</span>
                    <p className={styles.descricao}>{produto.descricao}</p>
            </div>
        </section>
    )
}

export default Produto
