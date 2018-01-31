import { StyleSheet, css } from 'aphrodite';

export const DefaultStyles = StyleSheet.create({
  content: {
    display: 'flex',
    flex: '1',
    maxWidth: '1024px',
    margin: '0 auto',
  },
  innerTitle: {
    color: '#fff',
    fontWeight: '500',
    left: '0',
    lineHeight: '0px',
    position: 'absolute',
    right: '0',
    textAlign: 'center',
    textTransform: 'uppercase',
    top: '50%',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  mainContent: {
    padding: '4px 10px',
    marginLeft:'-0.5%',
    marginRight:'-0.5%',
  },
  movieBox: {
    backgroundColor: '#333',
    boxSizing: 'border-box',
    display: 'inline-flex',
    height: 'auto',
    margin: '0.5%',
    paddingTop: '17.55%',
    position: 'relative',
    width: '13.2%',
    transition: '0.1s all',
    ':hover': {
      backgroundColor: '#111',
    },
  },
  section: {
    flex: '1',
  },
  titleRow: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 12px',
  },
});
