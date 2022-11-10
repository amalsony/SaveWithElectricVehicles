import classes from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={classes.nav_container}>
      <div className={classes.navbar}>
        <div className={classes.navbar_logo}>
          <h2>Save with EVs</h2>
        </div>
        <ul className={classes.navbarList}>
          <li className={classes.navbarListItem}>
            <Link href="/">Calculator</Link>
          </li>
          <li className={classes.navbarListItem}>
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
