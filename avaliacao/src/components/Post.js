import React from 'react'; 
import '../Post.css'

const Post = ({titulo, imagem, desc, categoria }) => {
    return(
        <div className="card">
            <h2 className='titulo'>{titulo}</h2>
            <img src={imagem} alt="Lamar Jackson" className='imagem'/>
            <p className='descricao'>{desc}</p>
            <p className='categoria'>{categoria}</p>
        </div>
    )
}

export default Post;
