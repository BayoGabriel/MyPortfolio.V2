import Logo from "../Assets/Images/gabriel-high-resolution-logo-transparent.png"
import "../Assets/Styles/nav.css"

function MyNav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg barr">
        <a class="navbar-brand" href="#home"><img className="logo" src={Logo} alt="logo" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#n">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#g">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#k">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#j">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default MyNav;