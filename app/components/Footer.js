import { DefaultStyles } from '../helpers/styles';
import React, {
  PureComponent,
}                          from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Link }       from 'react-router-dom';

import facebookIcon from '../assets/images/facebook.svg';
import twitterIcon from '../assets/images/twitter.svg';
import instagramIcon from '../assets/images/instagram.svg';

import appStoreIcon from '../assets/images/app-store.svg';
import playStoreIcon from '../assets/images/play-store.svg';
import microsoftIcon from '../assets/images/microsoft.svg';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#222',
    color: '#bbb',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '13px',
    justifyContent: 'space-between',
    padding: '24px 12px',
    zIndex: '2',
  },
  externalLinks: {
    marginTop:'24px',
  },
  listItem: {
    marginRight: '12px',
    ':after': {
      color: '#eee',
      content: '"|"',
      marginLeft: '12px',
    },
  },
  internalLinks: {
    display: 'flex',
    listStyleType: 'none',
    marginBottom: '10px',
  },
  image: {
    marginRight: '12px',
  },
  noAfter: {
    ':after': {
      display: 'none',
    },
  },
  socialButtons: {
    lineHeight: '36px',
  },
  storeButtons: {

  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
});

class Footer extends PureComponent
{
  render()
  {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.row)}>
          <ul className={css(styles.internalLinks)}>
            <li className={css(styles.listItem)}>
              <a className={css(DefaultStyles.link)} href='#'>Home</a>
            </li>
            <li className={css(styles.listItem)}>
              <a className={css(DefaultStyles.link)} href='#'>Terms and Conditions</a>
            </li>
            <li className={css(styles.listItem)}>
              <a className={css(DefaultStyles.link)} href='#'>Privacy Policy</a>
            </li>
            <li className={css(styles.listItem)}>
              <a className={css(DefaultStyles.link)} href='#'>Collection Statement</a>
            </li>
            <li className={css(styles.listItem)}>
              <a className={css(DefaultStyles.link)} href='#'>Help</a>
            </li>
            <li className={css(styles.listItem, styles.noAfter)}>
              <a className={css(DefaultStyles.link)} href='#'>Manage Account</a>
            </li>
          </ul>
        </div>
        <div className={css(styles.row)}>
          <p>Copyright &copy; 2018 NICKFLIX. All Rights Reserved.</p>
        </div>
        <div className={css(styles.row, styles.externalLinks)}>
          <div className={css(styles.socialButtons)}>
            <a href="#">
              <img src={facebookIcon} className={css(styles.image)} alt='Facebook' width='20' height='20' />
            </a>
            <a href="#">
              <img src={twitterIcon} className={css(styles.image)} alt='Twitter' width='20' height='20' />
            </a>
            <a href="#">
              <img src={instagramIcon} className={css(styles.image)} alt='Instagram' width='20' height='20' />
            </a>
          </div>
          <div className={css(styles.storeButtons)}>
            <a href="#">
              <img src={appStoreIcon} className={css(styles.image)} alt='App Store' height='36' />
            </a>
            <a href="#">
              <img src={playStoreIcon} className={css(styles.image)} alt='Play Store' height='36' />
            </a>
            <a href="#">
              <img src={microsoftIcon} className={css(styles.image)} alt='Microsoft Store' height='36' />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
