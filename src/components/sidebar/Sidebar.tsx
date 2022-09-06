import styles from "./Sidebar.module.scss";
import UserImage from "../../assets/png/samantha.png";
import { Link, useLocation } from "react-router-dom";

const sidebarNavLinks = [
  "dashboard",
  "expenses",
  "wallets",
  "summary",
  "accounts",
  "settings",
];
const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className={`${styles.sidebar}`}>
      <div className={styles.sidebarContent}>
        <div className={styles.profileDetails}>
          <div className={styles.profileImageDiv}>
            <img src={UserImage} alt="userimage" />
            <span className={styles.notifications}>4</span>
          </div>
          <p className={styles.userName}>Samantha</p>
          <p className={styles.userEmail}>Samantha@email.com</p>
        </div>
        <nav className={styles.sidebarNav}>
          <ul>
            {sidebarNavLinks.map((navlink) => (
              <li
                className={styles.sidebarNavItem}
                style={{ textTransform: "capitalize" }}
                key={navlink}
              >
                <Link
                  className={
                    location.pathname === `/${navlink}`
                      ? styles.sidebarNavLinkActive
                      : styles.sidebarNavLink
                  }
                  to={`/${navlink}`}
                >
                  {navlink}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
