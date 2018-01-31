import React, {
  PureComponent,
}                          from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Link }       from 'react-router-dom';
import { DefaultStyles } from '../helpers/styles';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
  },
  tabs: {
    display: 'flex',
    listStyleType: 'none',
  },
  tabButton: {
    flex: '1',
    textAlign: 'right',
  },
});

class Home extends PureComponent
{
  render()
  {
    return (
      <div className={css(styles.container)}>
        <div className={css(DefaultStyles.titleRow)}>
          <Link to={'/'} className={css(DefaultStyles.link)}>
            Popular Titles
          </Link>
        </div>
        <div id="#content" className={css(DefaultStyles.section, styles.mainContent)}>
          <Link to={'/series'}>
            <div className={css(DefaultStyles.movieBox)}>
              <div className={css(DefaultStyles.innerTitle)}>
                Series
              </div>
            </div>
          </Link>
          <Link to={'/series'}>
            <div className={css(DefaultStyles.movieBox)}>
              <div className={css(DefaultStyles.innerTitle)}>
                Movies
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
