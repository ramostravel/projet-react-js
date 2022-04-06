
import './App.css';
import myIMG from "./imageInSrc.jpg"
import myVideo from "./myVideo.mp4"

function App() {
  return (
  <div>

    <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

    <h1 className="title red">Your name here</h1>
    <br/>
    <img src={myIMG}  alt="src" />
    <br/>
    <img src="/imageInPublic.jpg" alt="imagePublic" />
    </div>
      <video width="320" height="240" controls>

      <source src={myVideo} type="video/mp4" />

      </video>
</div>
  );
}

export default App;
