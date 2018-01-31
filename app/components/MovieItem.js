import React, {
  Component,
}                          from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

export const styles = StyleSheet.create({
  bottomTitle: {
    bottom: '-20px',
    fontWeight: '500',
    height: '20px',
    overflow: 'hidden',
    position: 'absolute',
  },
  movieItem: {
    backgroundColor: '#333',
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'inline-flex',
    height: 'auto',
    margin: '0.5%',
    marginBottom: '20px',
    paddingTop: '17.55%',
    position: 'relative',
    width: '13.2%',
    transition: '0.1s all',
    ':hover': {
      opacity: '0.8',
    },
  },
  innerTitle: {
    color: '#fff',
    display: 'table-cell',
    fontWeight: '500',
    left: '0',
    lineHeight: '0px',
    position: 'absolute',
    right: '0',
    textAlign: 'center',
    textTransform: 'uppercase',
    top: '50%',
  },
  responsiveSmall: {
    width: '32.3% !important',
    paddingTop: '42.95% !important',
  },
});

class MovieItem extends Component
{
  render()
  {
    const {
      bottomTitle,
      innerTitle,
      imageURL,
    } = this.props;

    return (
      <div className={css(styles.movieItem)} style={imageURL && {background: `url(${imageURL})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}}>
        <div className={css(styles.innerTitle)}>
          {innerTitle}
        </div>
        <div className={css(styles.bottomTitle)}>
          {bottomTitle}
        </div>
      </div>
    );
  }
}

export default MovieItem;
