import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

import Logo from 'assets/logo.svg';

const navLinks = [
  { id: `menus`, label: `Menus` },
  { id: `location`, label: `Location & Hours` },
  { id: `news`, label: `News & Events` },
  { id: `about`, label: `About` },
  { id: `reserve`, label: `Reserve`, extraClass: `button` },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <Link href="/">
          <a className={styles.header__logo} aria-label="The Tin Cup Kitchen + Oyster Bar">
            <Logo />
          </a>
        </Link>
        <input type="checkbox" id="hamburger" className={styles.header__checkbox}></input>
        <label className={styles.header__toggle} htmlFor="hamburger">
          <span></span> Menu
        </label>

        <div className={styles.header__links}>
          {navLinks.map(({ id, label, extraClass = '' }) => (
            <Link key={id} href={`/${id}/`}>
              <a className={`header__link ${extraClass}`}>{label}</a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
