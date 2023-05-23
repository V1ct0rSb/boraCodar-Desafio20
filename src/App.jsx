import "./App.css";
import image1 from "./assets/01.png";
import image2 from "./assets/02.png";
import image3 from "./assets/03.png";
import image4 from "./assets/04.png";
import image5 from "./assets/05.png";
import image6 from "./assets/06.png";
import image7 from "./assets/07.png";
import image8 from "./assets/08.png";



export default function App() {
  return (
    <div className="container">
      <div className="title">
        <h1>The — Abstract Gallery</h1>
      </div>

      <div className="grid-container">
        <div className="image1">
          <img src={image1} alt="Imagem Abstrata" />
        </div>
        <div className="image2">
          <img src={image2} alt="Imagem Abstrata" />
        </div>

        <div className="image3">
        <img src={image3} alt="Imagem Abstrata" />
        </div>

        <div className="image4">
        <img src={image4} alt="Imagem Abstrata" />
        </div>

        <div className="image5">
        <img src={image5} alt="Imagem Abstrata" />
        </div>

        <div className="image6">
        <img src={image6} alt="Imagem Abstrata" />
        </div>

        <div className="image7">
        <img src={image7} alt="Imagem Abstrata" />
        </div>

        <div className="image8">
        <img src={image8} alt="Imagem Abstrata" />
        </div>
      </div>
    </div>
  );
}
