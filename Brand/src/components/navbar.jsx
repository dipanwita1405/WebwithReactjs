import '../App.css';

const Navbar = () => {
  return (
    <nav>
      <div className='container'>
        <div className='logo'>
          <img src="/images/hero-image.png" alt="Deal Parinda" />
        </div>
        <div className='flex'>
          <ul>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
