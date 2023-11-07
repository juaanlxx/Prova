import Imagem from './img/ravens.jpg'
import ImagemUsuario from './img/juan.png'
import './App.css';
import Comentario from './components/Comentario'
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <h1 className='siteheader'>Futebol Americano</h1>
      <Post titulo="Baltimore Ravens chega a 7 vitórias na temporada!" imagem={Imagem} desc="A equipe de Baltimore tem o melhor recorde da conferência americana após 9 semanas! Seria Lamar Jackson o MVP da liga? Ravens é o favorito ao SuperBowl? Dê sua opinião no nosso blog!" categoria="Esportes" />
      <h1 className='comentariosaba'>Comentários:</h1>
      <Comentario nome="Juan Pablo" imagem={ImagemUsuario} comentario="Com certeza os Ravens são favoritos ao SuperBowl!! E Lamar Jackson é sim MVP!"/>
    </div>
  );
}

export default App;
