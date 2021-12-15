
import './App.css';
import mahdi from  './imageInSrc.jpg'
import videoo from './video.mp4'
function App() {
  return (
  
          <div>
            <h1 className="title red">mahdi jenhani</h1>
            <div className='neo' style={{border: 'solid 1px black', maxWidth: '100vw'}}>
              
              <br ></br>
              <img src={mahdi} alt='erreur' />
              <br ></br>
              <img src='imageInPublic.jpg' alt='erreur' />
            </div>
            <video width={320} height={240} controls>
              <source src={videoo} type="video/mp4" />
            </video>
          </div>
        
  );
}

export default App;
