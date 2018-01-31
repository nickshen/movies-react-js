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
  tabLink : {
    color: 'white',
    textDecoration: 'none',
  },
  specialLink: {
    backgroundColor: '#0c2461',
    padding: '4px 8px',
  },
});

class NavigationBar extends PureComponent
{
  render()
  {
    return (
      <nav className={css(styles.container)}>
        <div className={css(styles.brand)}>
          Nick
        </div>
        <div className={css(styles.brand, styles.bold)}>
          Flix
        </div>
        <div className={css(DefaultStyles.section)}>
          <ul className={css(styles.tabs)}>
            <li className={css(styles.tabItem)}>
              <Link to="/" className={css(styles.tabLink)}>
                Log in
              </Link>
            </li>
            <li className={css(styles.tabItem)}>
              <Link to="/" className={css(styles.tabLink, styles.specialLink)}>
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
