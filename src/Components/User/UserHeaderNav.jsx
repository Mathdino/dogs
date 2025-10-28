import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import MinhasFotos from "../../Assets/feed.svg";
import Estatisticas from "../../Assets/estatisticas.svg";
import AdcionarFoto from "../../Assets/adicionar.svg";
import Sair from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import UserMedia from "../../Hooks/UseMedia";
import { useLocation } from "react-router-dom";

const UserHeaderNav = () => {
  const mobile = UserMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLoginClick() {
    userLogout();
    navigate("/login");
  }

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="MenuMobile"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <img src={MinhasFotos} alt="MinhasFotos" />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <img src={Estatisticas} alt="Estatisticas" />
          {mobile && "Estatisticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <img src={AdcionarFoto} alt="AdcionarFoto" />
          {mobile && "Adcionar Foto"}
        </NavLink>
        <button onClick={handleLoginClick}>
          <img src={Sair} alt="Sair" />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
