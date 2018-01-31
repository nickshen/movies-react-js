import React, {
  PureComponent,
}                          from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';
import { DefaultStyles } from '../helpers/styles';

const styles = StyleSheet.create({
  bold: {
    fontWeight: '700',
  },
  brand: {
    cursor: 'pointer',
    display: 'inline',
    fontSize: '22px',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#0652DD',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    letterSpacing: '1px',
    padding: '12px 12px',
    textTransform: 'uppercase',
    zIndex: '2',
  },
  tabs: {
    display: 'flex',
    justifyContent: 'flex-end',
    listStyleType: 'none',
  },
  tabItem: {
    textAlign: 'right',
    marginLeft: '24px',
  },
  navLink : {
    color: 'white',
    textDecoration: 'none',
  },
  specialLink: {
    backgroundColor: '#0c2461',
    padding: '8px 16px',
    transition: '0.1s all',
    ':hover': {
      backgroundColor: '#ff3f34',
    },
  },
});

class NavigationBar extends PureComponent
{
  render()
  {
    return (
      <nav className={css(styles.container)}>
        <Link to="/" className={css(styles.navLink)}>
          <div className={css(styles.brand)}>
            Nick
          </div>
          <div className={css(styles.brand, styles.bold)}>
            Flix
          </div>
        </Link>
        <div className={css(DefaultStyles.section)}>
          <ul className={css(styles.tabs)}>
            <li className={css(styles.tabItem)}>
              <Link to="/" className={css(styles.navLink)}>
                Log in
              </Link>
            </li>
            <li className={css(styles.tabItem)}>
              <Link to="/" className={css(styles.navLink, styles.specialLink)}>
                Start your free trial
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
