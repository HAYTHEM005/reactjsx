
import './Style.css';
import NavComponent from './components/NavComponent';
import imageInSrc from './imageInSrc.jpg';
function App() {
  return (
    <div>
    <NavComponent/>
      <h1 id='tit'>Haythem checkpoint</h1>
      
      <img className='tit2' src={imageInSrc} alt='/imageInSrc.jpg' ></img>
      <img className='tit2' src="/imageInPublic.jpg" ></img>
      </div>
  
  );
}

export default App;
