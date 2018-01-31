import React, {
  PureComponent,
}                          from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Link }       from 'react-router-dom';
import { DefaultStyles } from '../helpers/styles';
import MovieItem from './MovieItem';

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
        <div id="#content" className={css(DefaultStyles.section, DefaultStyles.mainContent)}>
          <Link to={'/series'}>
            <MovieItem innerTitle={'Series'} bottomTitle={'Series'} />
          </Link>
          <Link to={'/movies'}>
            <MovieItem innerTitle={'Movies'} bottomTitle={'Movies'} />
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
