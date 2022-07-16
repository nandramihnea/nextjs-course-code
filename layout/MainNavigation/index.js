import classes from "./MainNavigation.module.css";
import Link from "next/link";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul className={classes.navList}>
          <li>
            <Link href="/">
              <a>All Meetups</a>
            </Link>
          </li>
          <li>
            <Link href="/new-meetup">
              <a>Add New Meetup</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
