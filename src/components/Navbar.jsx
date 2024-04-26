

const Navbar = () => {
  return (
    <>
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">Shree IT Hub</label>
      <ul>
        <li><a className="active" href="/">Home</a></li>
        <li><a href="/aboutus">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar 