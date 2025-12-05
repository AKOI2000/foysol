function Navbar() {
  return (
    <div className="navbar nav-container">
      <div className="navbar_logo-box">
        <img src="/Logo.png" alt="" />
      </div>
      
      <nav className="navbar_nav">
        <a href="" className="navbar_nav-links">Home</a>
        <a href="#" className="navbar_nav-links">About</a>
        <a href="" className="navbar_nav-links">Leadership</a>
        <a href="" className="navbar_nav-links">Services</a>
        <a href="" className="navbar_nav-links">Contact</a>
      </nav>

      <div className="navbar_cta">
        <a href="" className="btn btn-main">Book a consultation</a>
      </div>
    </div>
  );
}

export default Navbar;
