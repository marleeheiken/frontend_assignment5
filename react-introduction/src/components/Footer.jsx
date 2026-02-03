import './Footer.css';

function Footer({title, storeName, storeEmail, storePhone, storeLocation}) {
    return (
        <footer className="app-footer">
            <div className="footer-title">
            <h1>{title}</h1>
        </div>

        <div className="footer-info">  
            <h4>{storeName}</h4>
            <div>{storeEmail}</div>
            <div>{storePhone}</div>
            <div>{storeLocation}</div>
        </div>

        <nav className="foot-nav-menu">
            <a href="#" className="foot-nav-link">Home</a>
            <a href="#" className="foot-nav-link">Products</a>
            <a href="#" className="foot-nav-link">About</a>
            <a href="#" className="foot-nav-link">Contact</a>
        </nav>
          
      </footer>
    );
  }
  
  export default Footer;