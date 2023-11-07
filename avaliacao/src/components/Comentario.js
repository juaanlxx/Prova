import React from 'react'; 
import '../Comentario.css'

const Comentario = ({nome, imagem, comentario}) => {
    return(
        <div className="card">
            <img src={imagem} alt="usuario" className='imagemusuario'/>
            <h2 className='nome'>{nome}</h2>
            <p className='comentario'>{comentario}</p>
        </div>
    )
}

export default Comentario;
