import './Hero.css';
import { Link } from 'react-router-dom';


function Hero({ heroTitle, heroPara, heroButton, image }) {
    return (
      <section
        className="app-hero"
        style={{ backgroundImage: `url(${image})` }}
      >
        <h1>{heroTitle}</h1>
        <p>{heroPara}</p>

        <Link to="/products">
          <button>{heroButton}</button>
        </Link>
      </section>
    );
  }
  
  export default Hero;
  
  