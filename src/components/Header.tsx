import { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import Button from "./Button";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const toLogin = () => {
    navigate("/login");
  };
  const toLogout = () => {
    localStorage.removeItem("TOKEN");
    window.location.href = "/";
  };

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) setIsLogged(true);
  }, []);

  return (
    <div className="flex items-center justify-between">
      <button onClick={() => navigate("/")}>
        <img src={Logo} alt="logo" />
      </button>
      {isLogged ? (
        <div className="flex items-center gap-4">
          <p>Welcome</p>
          <Button text="logout" onClicked={() => toLogout()} />
        </div>
      ) : location.pathname === "/login" ? null : (
        <Button text="login" onClicked={() => toLogin()} />
      )}
    </div>
  );
};

export default Header;
