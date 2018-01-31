import React, {
  PureComponent,
}                          from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';
import { DefaultStyles } from '../helpers/styles';

const styles = StyleSheet.create({
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
  },
});

class NavigationBar extends PureComponent
{
  render()
  {
    return (
      <nav className={css(styles.container)}>
        <div className={css(DefaultStyles.content)}>
          <div className={css(styles.brand)}>
            Nickflix
          </div>
          <div className={css(DefaultStyles.section)}>
            <ul className={css(styles.tabs)}>
              <li className={css(styles.tabItem)}>
                <Link to="/" className={css(styles.tabLink)}>
                  Login
                </Link>
              </li>
              <li className={css(styles.tabItem)}>
                <Link to="/about" className={css(styles.tabLink)}>
                  Start your free trial
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
