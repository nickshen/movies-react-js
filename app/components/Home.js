import React, {
  PureComponent,
}                          from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Link }       from 'react-router-dom';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 12px',
    flex: '1',
  },
  section: {
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
        <div className={styles.section}>
          Popular Titles
        </div>
        <div id="#content" className={styles.section}>

        </div>
      </div>
    );
  }
}

export default Home;
