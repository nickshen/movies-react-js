import React, {
  PureComponent,
}                          from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Link }       from 'react-router-dom';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#333',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '24px 12px',
    zIndex: '2',
  },
  section: {
    flex: '1',
    maxWidth: '1024px',
  },
});

class Footer extends PureComponent
{
  render()
  {
    return (
      <div className={css(styles.container)}>
          <div className={css(styles.section)}>
            FOOTER
          </div>
      </div>
    );
  }
}

export default Footer;
