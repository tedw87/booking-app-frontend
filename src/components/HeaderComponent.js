import SearchGroupButtons from "./SearchGroupButtons";
import Logo from "../images/logo.png";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="header-container">
        <img className="logo-header" src={Logo} alt="logo-placeholder" />
        <SearchGroupButtons />
        <button>Login</button>
      </div>
    </div>
  );
};

export default HeaderComponent;
