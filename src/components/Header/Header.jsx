import brandLogo from "../../assets/brandLogo.svg";
import './Header.css'

export default function Header() {
  return (
    <header>
      <div>
        <img src={brandLogo} alt="brand logo" className="logo"/>
      </div>
      <h1>Your travel journey starts here</h1>
      <p>The magic of the Mediterranean</p>
    </header>
  );
}
